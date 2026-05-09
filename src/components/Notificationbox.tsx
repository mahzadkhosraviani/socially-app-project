import { useEffect, useState } from "react";
import NotificationComment from "./NotificationComment";
import NotificationLike from "./NotificationLike";
import NotificationFollow from "./NotificationFollow";

import { authService } from "../services/authService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Notification = {
  id: number;
  type: "COMMENT" | "LIKE" | "FOLLOW";
  postId: string;
  creatorId: string;
  read: boolean;
};
async function fetchNotifications(): Promise<Notification[]> {
  const res = await authService.getNotifications();
  return res.data.data;
}
export default function NotificationBox() {
  // const [notifications, setNotifications] = useState<Notification[]>([]);
  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });
  const queryClient = useQueryClient();

  async function patchNotifications(unreadIds: number[]) {
    return await authService.markAllNotificationsAsRead(unreadIds);
  }
  const MarkAllRead = useMutation({
    mutationFn: patchNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
  const handleMarkAllRead = () => {
    const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id);

    MarkAllRead.mutate(unreadIds);
  };
  // const markAllRead = async () => {
  //   try {
  //     const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id);

  //     await authService.markAllNotificationsAsRead(unreadIds);

  //     setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className=" flex-col w-full max-w-4xl mx-auto mb-4 rounded-2xl  bg-white dark:bg-[#171717] border border-gray-200 shadow-lg dark:border-[#2a2a2a] max-h-100 md:max-h-120 overflow-y-auto">
      <div className=" sticky top-0 z-10 bg-white dark:bg-[#171717] flex items-center justify-between px-4 py-5  ">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Notifications
        </h2>

        <div className="flex items-center gap-3 ">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {unreadCount} unread
          </span>
          {unreadCount > 0 && (
            <>
              <button
                onClick={handleMarkAllRead}
                className="text-xs px-3 py-1 text-black  dark:text-white hover:bg-[#262626] hover:rounded-lg hover:transition-colors"
              >
                Mark as read
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 ">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="overflow-hidden cursor-pointer mt-1 mx-3 mb-5 rounded-xl  "
          >
            {n.type === "COMMENT" && <NotificationComment data={n} />}
            {n.type === "LIKE" && <NotificationLike data={n} />}
            {n.type === "FOLLOW" && <NotificationFollow data={n} />}
          </div>
        ))}
      </div>
    </div>
  );
}
