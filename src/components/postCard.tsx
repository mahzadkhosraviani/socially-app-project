export default function PostCard() {
  return (
    <div className="bg-white border border-gray-200 dark:bg-[#0A0A0A] dark:border-[#262626] rounded-2xl p-4 md:w-160 mt-7   h-47">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Farshad"
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex flex-wrap items-center gap-x-2">
          <span className="text-gray-900 dark:text-white font-semibold text-sm">
            Farshad Hosseini
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-xs">
            @f.e.h.farshad
          </span>
          <span className="text-gray-300 dark:text-gray-600 text-xs">•</span>
          <span className="text-gray-400 dark:text-gray-500 text-xs">
            8 days ago
          </span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">image</p>
      <div className="flex items-center gap-5 mt-8 ml-3">
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm">
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
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>1</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm">
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
