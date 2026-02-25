type Props = {
  isUnread?: boolean;
};

export default function NotificationComment({ isUnread = false }: Props) {
  return (
    <div
      className={`flex items-start gap-3 px-4 py-4 border-b border-gray-100 dark:border-[#2a2a2a] ${isUnread ? "bg-white dark:bg-[#1a1a1a]" : "bg-gray-50 dark:bg-[#111111]"}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#6b4f3a] flex items-center justify-center text-white font-bold text-sm shrink-0">
        A
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Ali Mousavi</span> commented on your
            post
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-1 ml-6">
          test post
        </p>
        <div className="ml-6 bg-gray-100 dark:bg-[#2a2a2a] rounded-md px-3 py-1.5 mb-2 inline-block">
          <p className="text-xs text-gray-700 dark:text-gray-300">tests</p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 ml-6">
          3 minutes ago
        </p>
      </div>
      {isUnread && (
        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
      )}
    </div>
  );
}
