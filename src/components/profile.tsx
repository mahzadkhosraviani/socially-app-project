import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string; // تاریخ‌ها معمولاً به صورت ISO string میان
  updatedAt: string;
};

function Profile({ user }) {
  const [userInfo, setUserInfo] = useState(null);

  // const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(user.id!);
        console.log("API user:", res.data.data);
        setUserInfo(res.data.data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    if (user.id) fetchData();
  }, [user.id]);
  console.log(user);
  const username = user.email.split("@")[0];
  const avatar = user.name.split("")[0]
  return (
    <div className="min-h-screen bg-white pl-3 dark:bg-[#0A0A0A]">
      <div className="w-100 h-101 bg-white dark:bg-[#0A0A0A] rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-[#262626]">
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto rounded-full bg-green-600 flex items-center justify-center text-white text-3xl font-bold">
          {avatar}
        </div>

        {/* Name */}
        <h2 className="mt-4 text-xl font-semibold text-[#171717] dark:text-white">
          {user?.name}
        </h2>

        {/* Username */}
        <p className="text-[#737373] dark:text-[#A3A3A3]">{username}</p>

        {/* Stats */}
        <div className="flex justify-between mt-6 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]">
          <div>
            <p className="font-bold text[#171717] dark:text-white">
              {userInfo?._count?.followings}
            </p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">
              Followings
            </span>
          </div>
          <div>
            <p className="font-bold text-[#171717] dark:text-white">
              {userInfo?._count?.followers}
            </p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">
              Followers
            </span>
          </div>
        </div>

        <div className="flex justify-around mt-6 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]"></div>
        {/* Location */}
        <div className="flex flex-row gap-2">
          <img
            src="src\assets\SVG.png"
            alt="loction icon"
            className="w-4 h-4 mt-[18px]"
          />
          <p className="mt-4 text-sm text-[#737373] dark:text-[#A3A3A3]">
            {!userInfo?.location && "no location"}
            {userInfo?.location}
          </p>
        </div>

        {/* Website */}
        <div className="flex flex-row gap-2">
          <img
            src="src\assets\SVG (1).png"
            alt="website icon"
            className="w-4 h-4 mt-[12px]"
          />
          <Link
            to="/"
            className="block mt-2 text-sm text-[#737373] hover:underline dark:text-[#A3A3A3]"
          >
            {!userInfo?.website && "no website"}
            {userInfo?.website}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
