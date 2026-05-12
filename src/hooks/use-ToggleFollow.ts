import { useMutation, useQueryClient } from "@tanstack/react-query";
import { recommendService } from "../services/recommendService";

export const useToggleFollow = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleFollow, isPending } = useMutation({
    mutationFn: async (userId) => {
      await recommendService.toggleFollow(userId);
    },

    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: ["userInfo", userId] });
      queryClient.invalidateQueries({ queryKey: ["recommended-users"] });
    },
  });

  return { toggleFollow, isPending };
};
