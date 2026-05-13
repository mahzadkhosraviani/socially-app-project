import location_image from "../assets/location..svg";
import link from "../assets/link.svg";
import calender from "../assets/calender.svg";
import { useState, useEffect } from "react";
import { authService } from "../services/authService";

import { useAuth } from "../context/AuthContext";
import { formatDistanceToNow } from "date-fns";

const UserInfo = ({ user1 }) => {
  const { user } = useAuth();

  const [userInfoNew, setUserInfoNew] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  // const location = user1?._count?.location ?? userInfoNew?.location;
  // const website = user1?._count?.website ?? userInfoNew?.website;

  // const location = user1?._count?.followings ?? userInfoNew?.location;
  // const website = user1?._count?.followers ?? userInfoNew?.website;

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
  });

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

  // console.log("userInfo::::", user);

  //   if (!location || !website) fetchData();
  // }, [user1?.id]);

  // console.log("userInfo", userInfoNew);

  const timeAgo = userInfoNew
    ? formatDistanceToNow(new Date(userInfoNew.createdAt), { addSuffix: true })
    : "";
  // console.log("timeeee :",timeAgo)
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
          {/* {!userInfoNew?.location && "no location"}
          {userInfoNew?.location} */}
        </span>
      </div>

      <div className="flex items-center  gap-2 mb-4">
        <img src={calender} className="w-4 h-4" />
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};

export default UserInfo;
