import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useUser = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: async () => {
      const res = await authService.getUser(username);
      return res.data.data;
    },
    enabled: !!username,
  });
};




export const useUserByUsername = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: async () => {
      const res = await authService.getUser(username);
      return res.data.data;
    },
    enabled: !!username,
  });
};
