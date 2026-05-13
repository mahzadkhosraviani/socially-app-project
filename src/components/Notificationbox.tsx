import NotificationComment from "./NotificationComment";
import NotificationLike from "./NotificationLike";
import NotificationFollow from "./NotificationFollow";

import { useNotifications } from "../hooks/fetch-notifications";
import { useMarkReadNotifications } from "../hooks/mark-notifications";

export default function NotificationBox() {
  const { data: notifications = [] } = useNotifications();

  const { mutate: MarkAllRead, isPending } = useMarkReadNotifications();
  const handleMarkAllRead = () => {
    const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id);
    MarkAllRead(unreadIds);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div>
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
                disabled={isPending}
                className={`cursor-pointer text-xs px-3 py-1 text-black  dark:text-white dark:hover:bg-[#262626] hover:bg-[#dadada] hover:rounded-lg hover:transition-colors ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
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
