import api from "../lib/axios";

export type Like = {
  id?: string;
  authorId?: string;
  userId?: string;
  // depending on actual structure
};

export type Author = {
  name: string;
  email: string;
  image: string | null;
};

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  author: Author;
};

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  likes: Like[]; // 👈 use the array to check liked status
  comments: Comment[];
  _count: {
    likes: number;
    comments: number;
  };
};

export const postService = {
  getAllPosts: () =>
    api.get<{ message: string; success: boolean; data: Post[] }>("/posts"),

  createPost: (content: string) =>
    api.post<{ message: string; success: boolean; data: Post }>("/posts", {
      content,
    }),

  likePost: (postId: string) => api.patch(`/posts/${postId}`),

  addComment: (postId: string, content: string) =>
    api.post(`/posts/${postId}/comment`, { content }),
};
