import location_image from "../assets/location..svg";
import link from "../assets/link.svg";
import calender from "../assets/calender.svg";
import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import { useAuth } from "../context/authContext";

const UserInfo = ({ user1 }) => {
  const { user } = useAuth();

  const [userInfoNew, setUserInfoNew] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  // const location = user1?._count?.location ?? userInfoNew?.location;
  // const website = user1?._count?.website ?? userInfoNew?.website;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(user1.id);
        setUserInfoNew(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
fetchData();
    // if (user.id === user1.id) {
    //   fetchData();
    // }
   
  },);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await authService.getUserById(user1.id);
  //       setUserInfo(res.data.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // });

  console.log("userInfo::::", user);
  return (
    <div className="flex flex-col gap-2 text-sm  text-gray-600 dark:text-white mt-4.5">
      <div className="flex items-center gap-2">
        <img src={location_image} className="w-4 h-4" />
        <span>
          {" "}
          {!userInfoNew?.location && "no location"}
          {userInfoNew?.location}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <img src={link} className="w-4 h-4" />
        <span>
          {" "}
          {!userInfoNew?.website && "no location"}
          {userInfoNew?.website}
        </span>
      </div>

      <div className="flex items-center  gap-2 mb-4">
        <img src={calender} className="w-4 h-4" />
        <span>7 days ago</span>
      </div>
    </div>
  );
};

export default UserInfo;
