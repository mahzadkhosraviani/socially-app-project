import { useState } from "react";
import NotificationComment from "./NotificationComment";
import NotificationLike from "./NotificationLike";
import NotificationFollow from "./NotificationFollow";

type Notification = {
  id: number;
  type: "comment" | "like" | "follow";
  isUnread: boolean;
};

const initialNotifications: Notification[] = [
  { id: 1, type: "comment", isUnread: true },
  { id: 2, type: "like", isUnread: true },
  { id: 3, type: "comment", isUnread: false },
  { id: 4, type: "follow", isUnread: false },
];

export default function NotificationBox() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));

  const markRead = (id: number) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n)),
    );

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto rounded-t-2xl overflow-hidden bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] min-h-screen sm:min-h-0 sm:h-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-[#2a2a2a]">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Notifications
        </h2>

        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
            >
              {unreadCount} unread
            </button>
          )}
          {unreadCount === 0 && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              All read
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => markRead(n.id)}
            className="cursor-pointer"
          >
            {n.type === "comment" && (
              <NotificationComment isUnread={n.isUnread} />
            )}
            {n.type === "like" && <NotificationLike isUnread={n.isUnread} />}
            {n.type === "follow" && (
              <NotificationFollow isUnread={n.isUnread} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
