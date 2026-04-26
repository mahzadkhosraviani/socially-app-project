import type { LikeValidator } from "@hookform/resolvers/fluentvalidation-ts/src/__tests__/__fixtures__/data.js";
import api from "../lib/axios";

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
  likes: LikeValidator[];
  comments: Comment[];
  _count: {
    likes: number;
    comments: number;
  };
};

export const postService = {
  getAllPosts: () => api.get<{ message: string; success: boolean; data: Post[] }>("/posts"),
};