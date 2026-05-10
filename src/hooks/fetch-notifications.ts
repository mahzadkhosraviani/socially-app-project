import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import type { Notification } from "../types/notifications";

async function fetchNotifications(): Promise<Notification[]> {
  const res = await authService.getNotifications();
  return res.data.data;
}
export const useNotifications = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });
};
