import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from "../services/postService";
import { useAuth } from "../context/authContext";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (content: string) => postService.createPost(content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["profileContent"] });
      if (user?.id) {
        queryClient.invalidateQueries({ queryKey: ["userPostsCount", user.id] });
      }
    },
  });
};