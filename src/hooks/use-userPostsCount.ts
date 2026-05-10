import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useUserPostsCount = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["userPostsCount", userId],
    queryFn: async () => {
      if (!userId) return 0;
      const res = await authService.getUserPosts(userId);
      const postsArray = res.data.data;
      return postsArray.length;
    },
    enabled: !!userId,
  });
};