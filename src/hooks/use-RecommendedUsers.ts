import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { recommendService } from "../services/recommendService";

export const useRecommendedUsers = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["recommended-users"],
    queryFn: async () => {
      const res = await recommendService.getRecommended();
      return res.data.data;
    },
  });

  const { mutate: toggleFollow } = useMutation({
    mutationFn: async (id: string) => {
      await recommendService.toggleFollow(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recommended-users"] });
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
  });

  return {
    users: data || [],
    isLoading,
    toggleFollow,
  };
};
