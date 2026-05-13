function Delete({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-125 max-w-125 p-6 bg-white dark:bg-[#1a1a1a] border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col gap-4">
        <div className="text-left">
          <h2 className="text-lg text-gray-900 dark:text-white">
            Delete Post
          </h2>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 dark:border-gray-400 rounded-md bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;