import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from "../services/postService";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => postService.createPost(content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};