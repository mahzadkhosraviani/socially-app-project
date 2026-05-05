import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import LocationIcon from "../assets/SVG.png";
import WebsiteIcon from "../assets/SVG (1).png";
import setAvatarColors from "../utils/setAvatarColors";
import { useState, useEffect } from "react";


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
const [userInfoNew,setUserInfoNew] = useState(null)

  const { user } = useAuth();


  const { data} = useQuery({
    queryKey: ["userInfo", user?.id],
    queryFn: async () => {
      const res = await authService.getUserById(user!.id);
      return res.data.data;
    },
    enabled: !!user?.id,
  });

  if (!user) return null;


  const fetchUser = async () => {
    try {
      const res = await authService.getUserById(user.id);
      setUserInfoNew(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await authService.getUserById(user.id);
      setUserInfoNew(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchUser();
}, );


  // console.log("balaye:", user);
  const username = user.email.split("@")[0];
  const avatar = user.name.split("")[0];

  useEffect(() => {
    if (user?.id) fetchUser();
  }, [user?.id]);

  useEffect(() => {
    const handler = () => fetchUser();
    window.addEventListener("follow-updated", handler);
    return () => window.removeEventListener("follow-updated", handler);
  }, []);





  return (
// <<<<<<< HEAD
//     <div className="min-h-screen bg-white pl-3 dark:bg-[#0A0A0A] ">
//       <div className="w-100 h-auto bg-white dark:bg-[#0A0A0A] rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-[#262626]">
// =======
    <div className="min-h-screen bg-white md:pl-28 dark:bg-[#0A0A0A]">


      <div className="w-73 h-auto bg-white dark:bg-[#171717] rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-[#262626]">

        {/* Avatar */}

        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${setAvatarColors(user.name)} text-white text-3xl font-bold`}>

      {/* <div className="w-73 h-100 bg-white dark:bg-[#171717] rounded-2xl shadow-lg p-6 text-center border border-gray-200 dark:border-[#262626]">
        <div
          className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${setAvatarColors(user.name)} text-white text-3xl font-bold`}
        > */}

          {avatar}
        </div>



        <h2 className="mt-4 text-xl font-semibold text-[#171717] dark:text-white">
          {userInfoNew?.name}
        </h2>


        <p className="text-[#737373] dark:text-[#A3A3A3]">{username}</p>

        <p className="mt-2 text-sm text-[#737373] dark:text-[#A3A3A3]">
         {userInfoNew?.bio}
        </p>
        {/* Stats */}



        <div className="flex justify-between mt-6 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]">
          <div>
            <p className="font-bold text[#171717] dark:text-white">
              {userInfoNew?._count?.followings}
            </p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">Followings</span>
          </div>
          <div>
            <p className="font-bold text-[#171717] dark:text-white">
              {userInfoNew?._count?.followers}
            </p>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3]">Followers</span>
          </div>
        </div>
{/* <<<<<<< HEAD
        <div className="flex justify-around mt-6 pt-4 border-t border-[#E5E5E5] dark:border-[#262626]"></div>
        <div className="flex flex-row gap-2">
          <img src={LocationIcon} alt="location icon" className="w-4 h-4 mt-[18px]" />
======= */}

        <div className="flex flex-row gap-2">
          <img src={LocationIcon} className="w-4 h-4 mt-[18px]" />

          <p className="mt-4 text-sm text-[#737373] dark:text-[#A3A3A3]">
            {userInfoNew?.location || "no location"}
          </p>
        </div>


        {/* Website */}
        <div className="flex flex-row gap-2 ">
          <img
            src={WebsiteIcon}
            alt="website icon"
            className="w-4 h-4 mt-[12px]"
          />
          <p className="text-[#737373] dark:text-[#A3A3A3] text-sm mt-2 mb-4">

        {/* <div className="flex flex-row gap-2">
          <img src={WebsiteIcon} className="w-4 h-4 mt-[12px]" />
          <Link
            to="/"
            className="block mt-2 text-sm text-[#737373] hover:underline dark:text-[#A3A3A3]"
          > */}

            {!userInfoNew?.website && "no website"}
            {userInfoNew?.website}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Profile;