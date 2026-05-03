import { useEffect, useState } from "react";
import NotificationComment from "./NotificationComment";
import NotificationLike from "./NotificationLike";
import NotificationFollow from "./NotificationFollow";

import { authService } from "../services/authService";

type Notification = {
  id: number;
  type: "COMMENT" | "LIKE" | "FOLLOW";
  postId: string;
  creatorId: string;
  read: boolean;
};

export default function NotificationBox() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getNotifications();
        console.log(res.data);
        setNotifications(res.data.data);
      } catch (error) {
        console.error("failed to load notification:", error);
      }
    };
    fetchData();
  }, []);
  const markAllRead = async () => {
    try {
      const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id);

      await authService.markAllNotificationsAsRead(unreadIds);

      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch (error) {
      console.error(error);
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="bg-flex flex-col w-full max-w-4xl mx-auto rounded-2xl  bg-white dark:bg-[#171717] border border-gray-200 dark:border-[#2a2a2a] max-h-[500px] overflow-y-auto">
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
                onClick={markAllRead}
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
