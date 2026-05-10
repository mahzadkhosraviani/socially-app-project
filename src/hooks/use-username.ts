import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useUser = (username) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () =>
      authService.getUser(username).then((res) => res.data.data),
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
