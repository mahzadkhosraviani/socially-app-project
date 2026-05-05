import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postService, type Post, type Comment, type Like } from "../services/postService";
import { useAuth } from "./authContext";

type PostContextType = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  toggleLike: (postId: string) => void;
  addComment: (postId: string, content: string) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
};

const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const currentUserId = user?.id || user?.authorId;
  const currentUserName = user?.name || "Anonymous";
  const currentUserEmail = user?.email || "";
  const currentUserImage = user?.image || null;

  const {
    data: posts = [],
    isLoading: loading,
    error: queryError,
    refetch: queryRefetch,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await postService.getAllPosts();
      return res.data?.data ?? [];
    },
  });

  const error = queryError
    ? queryError instanceof Error
      ? queryError.message
      : "Failed to load posts"
    : null;

  const refetch = async () => {
    await queryRefetch();
  };

  const likeMutation = useMutation({
    mutationFn: (postId: string) => postService.likePost(postId),
    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previous = queryClient.getQueryData<Post[]>(["posts"]);

      queryClient.setQueryData<Post[]>(["posts"], (old = []) =>
        old.map((post) => {
          if (post.id !== postId) return post;
          const isLiked = post.likes.some(
            (like) => like.authorId === currentUserId || like.userId === currentUserId
          );
          const newLikes: Like[] = isLiked
            ? post.likes.filter(
                (like) => like.authorId !== currentUserId && like.userId !== currentUserId
              )
            : [{ authorId: currentUserId, userId: currentUserId }, ...post.likes];
          return {
            ...post,
            likes: newLikes,
            _count: { ...post._count, likes: post._count.likes + (isLiked ? -1 : 1) },
          };
        })
      );

      return { previous };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profileContent"] });
    },
    onError: (_err, _postId, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["posts"], context.previous);
      }
    },
  });

  const commentMutation = useMutation({
    mutationFn: ({ postId, content }: { postId: string; content: string }) =>
      postService.addComment(postId, content),
    onMutate: async ({ postId, content }) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previous = queryClient.getQueryData<Post[]>(["posts"]);

      const optimisticComment: Comment = {
        id: `temp-${Date.now()}`,
        content,
        createdAt: new Date().toISOString(),
        author: {
          name: currentUserName,
          email: currentUserEmail,
          image: currentUserImage,
        },
      };

      queryClient.setQueryData<Post[]>(["posts"], (old = []) =>
        old.map((post) => {
          if (post.id !== postId) return post;
          return {
            ...post,
            comments: [optimisticComment, ...post.comments],
            _count: { ...post._count, comments: post._count.comments + 1 },
          };
        })
      );

      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["posts"], context.previous);
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (postId: string) => postService.deletePost(postId),
    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previous = queryClient.getQueryData<Post[]>(["posts"]);

      queryClient.setQueryData<Post[]>(["posts"], (old = []) =>
        old.filter((p) => p.id !== postId)
      );

      return { previous };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profileContent"] });
      queryClient.invalidateQueries({ queryKey: ["userPosts"] });
    },
    onError: (_err, _postId, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["posts"], context.previous);
      }
    },
  });

  const toggleLike = (postId: string) => {
    likeMutation.mutate(postId);
  };

  const addComment = async (postId: string, content: string) => {
    if (!content.trim()) return;
    await commentMutation.mutateAsync({ postId, content });
  };

  const deletePost = async (postId: string) => {
    await deleteMutation.mutateAsync(postId);
  };

  return (
    <PostContext.Provider
      value={{ posts, loading, error, refetch, toggleLike, addComment, deletePost }}
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