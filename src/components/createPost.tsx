export default function CreatePost() {
  return (
    <div className="bg-white border border-gray-200 dark:bg-[#0A0A0A] dark:border-[#262626] rounded-2xl p-4 w-full max-w-200 h-47">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          S
        </div>
        <input type="text" placeholder="whats on your mind?"
        className="border-none outline-none dark:text-gray-300"/>
      </div>
      <div className="h-10" />
      <div className="border-t border-gray-200 dark:border-[#262626] my-3" />
      <div className="flex justify-end">
        <button className="flex items-center gap-2 border bg-[#0A0A0A] border-gray-300 dark:border-[#3a3a3a] dark:bg-white text-white dark:text-black text-sm font-medium px-4 py-2 rounded-xl">
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
