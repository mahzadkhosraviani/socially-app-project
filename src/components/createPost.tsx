export default function CreatePost() {
  return (
    <div className="bg-white border border-gray-200 dark:bg-[#1a1a1a] dark:border-[#2a2a2a] rounded-2xl p-4 w-full max-w-xl">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          S
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-sm pt-2">
          What's on your mind?
        </p>
      </div>
      <div className="h-10" />
      <div className="border-t border-gray-200 dark:border-[#2a2a2a] my-3" />
      <div className="flex justify-end">
        <button className="flex items-center gap-2 border border-gray-300 dark:border-[#3a3a3a] text-gray-500 dark:text-gray-400 text-sm font-medium px-4 py-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          Post
        </button>
      </div>
    </div>
  );
}
