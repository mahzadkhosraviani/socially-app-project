import setAvatarColors from "../utils/setAvatarColors";
import FollowButton from "./FollowButton";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";

interface usercardprops {
  id: string;
  name: string;
  _count: {
    followers: number;
  };
  isFollowing: boolean;
  onToggleFollow: (id: string) => void;
}

const Usercard = (props: usercardprops) => {
  const [userInfo, SetUserInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(props.id);
        SetUserInfo(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const username = userInfo?.email.split("@")[0];

  const avatar = props.name.split("")[0].toUpperCase();
  console.log(props._count.followers);

  return (
    <div className="flex items-center justify-between p-3 rounded-lg">
      <Link to={`/dashboard-profile/${username}`}>
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 flex items-center justify-center text-white font-bold ${setAvatarColors(props.name)} rounded-full`}
          >
            {avatar}
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">{props.name}</span>

            <span className="text-sm text-gray-400">
              {props._count.followers} followers
            </span>
          </div>
        </div>
      </Link>
      <FollowButton
        isFollowing={props.isFollowing}
        onClick={() => props.onToggleFollow(props.id)}
      />
    </div>
  );
};

export default Usercard;
