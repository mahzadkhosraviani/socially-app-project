
import { useEffect, useState } from "react";
import porfilephoto from "../assets/profile photo.svg";
import { authService } from "../services/authService";
import setAvatarColors from "../utils/setAvatarColors";

 const PorfileCard = ({user}) => {


  const username = user?.email.split("@")[0];
  const [userInfo,setUserInfo] = useState(null)
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await authService.getUserById(user.id);
          setUserInfo(res.data.data);
        } catch (err) {
          console.error(err);
        }
      };
       fetchData();
    }, );
  const avatar = userInfo?.name.split("")[0]
  return (
    <div className="flex flex-col items-center gap-4 mt-1.5">
      <div
        className={`w-16 h-16 flex items-center justify-center text-white font-bold ${setAvatarColors(user.name)} rounded-full`}
      >
        {avatar}
      </div>
      <div className="flex flex-col text-center">
        <span className="text-lg dark:text-white font-bold">{userInfo?.name}</span>
        <span className="text-gray-500 dark:text-white">{username}</span>
        <span className="text-gray-500 dark:text-white mt-2 max-w-[245px]">{userInfo?.bio}</span>
      </div>
    </div>
  );
};

export default PorfileCard;
