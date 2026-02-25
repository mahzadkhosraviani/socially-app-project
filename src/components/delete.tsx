function Delete() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  dark:bg-gray-900">

      <div className="w-125 max-w-125 p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col gap-4">
       <div className="text-left">
           <h2 className="text-lg text-gray-900 dark:text-white">
             Delete Post
           </h2>
       </div>
     

        <p className="text-sm text-gray-600  dark:text-gray-300 mt-1">
          This Action Can be undone
        </p>

        <div className="flex justify-end gap-4 mt-6">
         <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition">
            Cancel
          </button>

          <button className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}

export default Delete;