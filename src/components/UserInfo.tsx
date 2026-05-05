import location_image from "../assets/location..svg";
import link from "../assets/link.svg";
import calender from "../assets/calender.svg";
import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import { formatDistanceToNow } from "date-fns";

const UserInfo = ({ user }) => {
  const [userInfoNew, setUserInfoNew] = useState(null);
  const location = user?._count?.followings ?? userInfoNew?.location;
  const website = user?._count?.followers ?? userInfoNew?.website;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(user.id);
        setUserInfoNew(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (!location || !website) fetchData();
  }, [user?.id]);

  console.log("userInfo", userInfoNew);

  const timeAgo = userInfoNew
    ? formatDistanceToNow(new Date(userInfoNew.createdAt), { addSuffix: true })
    : "";

  return (
    <div className="flex flex-col gap-2 text-sm  text-gray-600 dark:text-white mt-4.5">
      <div className="flex items-center gap-2">
        <img src={location_image} className="w-4 h-4" />
        <span>
          {!userInfoNew?.location && "no location"}
          {userInfoNew?.location}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <img src={link} className="w-4 h-4" />
        <span>
          {!userInfoNew?.location && "no location"}
          {userInfoNew?.location}
        </span>
      </div>

      <div className="flex items-center  gap-2">
        <img src={calender} className="w-4 h-4" />
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};

export default UserInfo;
