import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-white pl-3 dark:bg-[#0A0A0A]">

      <div className="w-100 h-101 bg-white dark:bg-[#0A0A0A] rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-[#262626]">

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto rounded-full bg-green-600 flex items-center justify-center text-white text-3xl font-bold">
          P
        </div>

        {/* Name */}
        <h2 className="mt-4 text-xl font-semibold text-[#171717] dark:text-white">
         parham esfahani
        </h2>

        {/* Username */}
        <p className="text-[#737373] dark:text-[#A3A3A3]">
          @parhames
        </p>

        {/* Stats */}
        <div className="flex justify-between mt-6 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]">
          <div>
            <p className="font-bold text[#171717] dark:text-white">1</p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">
              Followings
            </span>
          </div>
          <div>
            <p className="font-bold text-[#171717] dark:text-white">2</p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">
              Followers
            </span>
          </div>
        </div>

    <div className="flex justify-around mt-6 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]"></div>
        {/* Location */}
        <div className="flex flex-row gap-2">
            <img src="src\assets\SVG.png" alt="loction icon" className="w-4 h-4 mt-[18px]" />
             <p className="mt-4 text-sm text-[#737373] dark:text-[#A3A3A3]">
           Tehran, Iran
        </p>
        </div>
      

        {/* Website */}
        <div className="flex flex-row gap-2" >
            <img src="src\assets\SVG (1).png" alt="website icon" className="w-4 h-4 mt-[12px]"/>
             <Link to="/" className="block mt-2 text-sm text-[#737373] hover:underline dark:text-[#A3A3A3]">
               .... 
             </Link>
        </div>
       

      </div>
    </div>
  );
}

export default Profile;