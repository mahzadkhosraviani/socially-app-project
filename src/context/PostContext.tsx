import React, { createContext, useContext, useEffect, useState } from "react";
import { postService, type Post } from "../services/postService";
import { useAuth } from "./authContext"; // 👈 import auth

type PostContextType = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  toggleLike: (postId: string) => void; // no async needed for UI
};

const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth(); // get current user
  const currentUserId = user?.id || user?.authorId; // adjust based on your user object

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
    // Find post index
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) return;

    const post = posts[postIndex];
    // Determine if already liked by checking likes array
    const isLiked = post.likes.some(
      like => like.authorId === currentUserId || like.userId === currentUserId
    );

    // Create optimistic updated post
    const updatedPosts = [...posts];
    let newLikesArray = [...post.likes];
    let newLikeCount = post._count.likes;

    if (isLiked) {
      // Unlike: remove current user from likes array
      newLikesArray = newLikesArray.filter(
        like => like.authorId !== currentUserId && like.userId !== currentUserId
      );
      newLikeCount = post._count.likes - 1;
    } else {
      // Like: add a temporary like object (optimistic)
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

    // Make API call in background
    postService.likePost(postId).catch(() => {
      // Rollback on error
      setPosts(posts); // revert to original posts state
      console.error("Like/unlike failed");
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, loading, error, refetch: fetchPosts, toggleLike }}
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