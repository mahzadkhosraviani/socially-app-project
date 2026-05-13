import { useMutation, useQueryClient } from "@tanstack/react-query";
import { recommendService } from "../services/recommendService";
import toast from "react-hot-toast";
import CustomToast from "../components/CustomToast";
export const useToggleFollow = () => {
  const queryClient = useQueryClient();
  const showToast = (message: string, type: "success" | "error") => {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        message={message}
        type={type}
      />
    ),
    {
      duration: 2000,
    }
  );
};

  const { mutate: toggleFollow, isPending } = useMutation({
    mutationFn: async (userId) => {
      await recommendService.toggleFollow(userId);
    },

    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: ["userInfo", userId] });
      queryClient.invalidateQueries({ queryKey: ["recommended-users"] });
      showToast("Follow status updated", "success");
    },
    onError: () => {
      showToast("Something went wrong", "error");
    },
  });

  return { toggleFollow, isPending };
};
