import React, { createContext, useContext, useEffect, useState } from "react";
import { postService, type Post, type Comment } from "../services/postService";
import { useAuth } from "./authContext";

type PostContextType = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  toggleLike: (postId: string) => void;
  addComment: (postId: string, content: string) => Promise<void>;
};

const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const currentUserId = user?.id || user?.authorId;
  const currentUserName = user?.name || "Anonymous";
  const currentUserEmail = user?.email || "";
  const currentUserImage = user?.image || null;

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await postService.getAllPosts();
      setPosts(res.data?.data ?? []);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to load posts";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = (postId: string) => {
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) return;

    const post = posts[postIndex];
    const isLiked = post.likes.some(
      like => like.authorId === currentUserId || like.userId === currentUserId
    );

    const updatedPosts = [...posts];
    let newLikesArray = [...post.likes];
    let newLikeCount = post._count.likes;

    if (isLiked) {
      newLikesArray = newLikesArray.filter(
        like => like.authorId !== currentUserId && like.userId !== currentUserId
      );
      newLikeCount = post._count.likes - 1;
    } else {
      const optimisticLike = { authorId: currentUserId, userId: currentUserId };
      newLikesArray = [optimisticLike, ...newLikesArray];
      newLikeCount = post._count.likes + 1;
    }

    updatedPosts[postIndex] = {
      ...post,
      likes: newLikesArray,
      _count: { ...post._count, likes: newLikeCount },
    };
    setPosts(updatedPosts);

    postService.likePost(postId).catch(() => {
      setPosts(posts);
      console.error("Like/unlike failed");
    });
  };

  const addComment = async (postId: string, content: string) => {
    if (!content.trim()) return;

    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) return;

    // Create optimistic comment object
    const optimisticComment: Comment = {
      id: `temp-${Date.now()}`,
      content: content,
      createdAt: new Date().toISOString(),
      author: {
        name: currentUserName,
        email: currentUserEmail,
        image: currentUserImage,
      },
    };

    // Save current state for rollback
    const originalPosts = [...posts];
    const currentPost = posts[postIndex];
    const updatedComments = [optimisticComment, ...(currentPost.comments || [])];

    const updatedPosts = [...posts];
    updatedPosts[postIndex] = {
      ...currentPost,
      comments: updatedComments,
      _count: {
        ...currentPost._count,
        comments: currentPost._count.comments + 1,
      },
    };
    setPosts(updatedPosts);

    try {
      await postService.addComment(postId, content);
      // Optionally, you could refetch to get the real comment ID, but not required
    } catch (err) {
      // Rollback on error
      setPosts(originalPosts);
      console.error("Failed to add comment", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, loading, error, refetch: fetchPosts, toggleLike, addComment }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const ctx = useContext(PostContext);
  if (!ctx) throw new Error("usePost must be used within PostProvider");
  return ctx;
}