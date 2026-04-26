import React, { createContext, useContext, useEffect, useState } from "react";
import { postService } from "../services/postService";
import type { Post } from "../services/postService";

type PostContextType = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, loading, error, refetch: fetchPosts }}
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
