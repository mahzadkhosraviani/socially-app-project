import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services/authService";

async function patchNotifications(unreadIds: number[]) {
  return await authService.markAllNotificationsAsRead(unreadIds);
}

export const useMarkReadNotifications = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};
