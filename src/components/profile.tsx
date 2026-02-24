import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center dark:bg-gray-900 transition-all">

      <div className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-gray-700">

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto rounded-full bg-green-600 flex items-center justify-center text-white text-3xl font-bold">
          P
        </div>

        {/* Name */}
        <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
         parham esfahani
        </h2>

        {/* Username */}
        <p className="text-gray-500 dark:text-gray-400">
          @parhames
        </p>

        {/* Stats */}
        <div className="flex justify-around mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="font-bold text-gray-800 dark:text-white">1</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Followers
            </span>
          </div>
          <div>
            <p className="font-bold text-gray-800 dark:text-white">2</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Following
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-row gap-2">
            <img src="src\assets\SVG.png" alt="loction icon" className="w-4 h-4 mt-[18px]" />
             <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
           Tehran, Iran
        </p>
        </div>
      

        {/* Website */}
        <div className="flex flex-row gap-2" >
            <img src="src\assets\SVG (1).png" alt="website icon" className="w-4 h-4 mt-[12px]"/>
             <Link to="/" className="block mt-2 text-sm text-blue-600 hover:underline dark:text-blue-400">
               .... 
             </Link>
        </div>
       

      </div>
    </div>
  );
}

export default Profile;