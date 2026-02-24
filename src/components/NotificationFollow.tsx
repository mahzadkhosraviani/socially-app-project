type Props = {
  isUnread?: boolean;
};

export default function NotificationFollow({ isUnread = false }: Props) {
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
            className="w-4 h-4 text-blue-400 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
          <span className="text-sm text-gray-800 dark:text-gray-200">
            <span className="font-semibold">Ali Mousavi</span> followed you
          </span>
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
