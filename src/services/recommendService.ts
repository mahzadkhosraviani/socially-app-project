import api from "../lib/axios";

export type RecommendedUser = {
  id: string;
  name: string;
  followers: number;
  isFollowing: boolean;
};

export const recommendService = {
  getRecommended: () =>
    api.get<{
      message: string;
      success: boolean;
      data: RecommendedUser[];
    }>("/users/recommend"),

  toggleFollow: (userId: string) =>
    api.patch<{ message: string; success: boolean }>(`/users/${userId}`),
};
