type Props = {
  isUnread?: boolean;
};

export default function NotificationLike({ isUnread = false }: Props) {
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
            className="w-4 h-4 text-rose-400 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={0}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Ali Mousavi</span> liked your post
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-1 ml-6">
          test post
        </p>
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
