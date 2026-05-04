import { useEffect, useState } from "react";
import porfilephoto from "../assets/profile photo.svg";
import { authService } from "../services/authService";


 const PorfileCard = ({user}) => {


  const username = user.email.split("@")[0];
  const avatar = user.name.split("")[0]
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
  console.log("userrrrrrrr:",user)
  return (
    <div className="flex flex-col items-center gap-4 mt-1.5">
      <img
        src={porfilephoto}
        alt="profile"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex flex-col text-center">
        <span className="text-lg dark:text-white font-bold">{userInfo?.name}</span>
        <span className="text-gray-500 dark:text-white">{username}</span>
        <span className="text-gray-500 dark:text-white mt-2 max-w-[245px]">{userInfo?.bio}</span>
      </div>
    </div>
  );
};

export default PorfileCard;
