import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import LocationIcon from "../assets/SVG.png";
import WebsiteIcon from "../assets/SVG (1).png";
import setAvatarColors from "../utils/setAvatarColors";

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string; 
  updatedAt: string;
};

function Profile() {


  // const { user } = useAuth();

  const { user } = useAuth();
  const [userInfoNew, setUserInfoNew] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(user.id);
        setUserInfoNew(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (user?.id) fetchData();
  }, [user?.id]);
  console.log(user);
  const username = user.email.split("@")[0];
  const avatar = user.name.split("")[0]
  return (
    <div className="min-h-screen bg-white pl-30 dark:bg-[#0A0A0A]">
      <div className="w-73 h-100 bg-white dark:bg-[#171717] rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-[#262626]">
        {/* Avatar */}
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${setAvatarColors(user.name)} text-white text-3xl font-bold`}>
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
              {userInfoNew?._count?.followings}
            </p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">
              Followings
            </span>
          </div>
          <div>
            <p className="font-bold text-[#171717] dark:text-white">
              {userInfoNew?._count?.followers}
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
            src={LocationIcon}
            alt="loction icon"
            className="w-4 h-4 mt-[18px]"
          />
          <p className="mt-4 text-sm text-[#737373] dark:text-[#A3A3A3]">
            {!userInfoNew?.location && "no location"}
            {userInfoNew?.location}
          </p>
        </div>

        {/* Website */}
        <div className="flex flex-row gap-2">
          <img
            src={WebsiteIcon}
            alt="website icon"
            className="w-4 h-4 mt-[12px]"
          />
          <Link
            to="/"
            className="block mt-2 text-sm text-[#737373] hover:underline dark:text-[#A3A3A3]"
          >
            {!userInfoNew?.website && "no website"}
            {userInfoNew?.website}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
