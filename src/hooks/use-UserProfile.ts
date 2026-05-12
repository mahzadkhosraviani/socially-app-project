import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useUserProfile = (userId) => {
  return useQuery({
    queryKey: ["userInfo", userId],
    queryFn: async () => {
      const res = await authService.getUserById(userId);
      return res.data.data;
    },
    enabled: !!userId,
  });
};
