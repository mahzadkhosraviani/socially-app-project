import FollowButton from "./followbutton";
import porfilphoto from "../assets/profile photo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";

interface usercardprops {
  id: string;
  name: string;
  followers: number;
  isFollowing: boolean;
  onToggleFollow: (id: string) => void;
}

const Usercard = (props: usercardprops) => {
 
    const [userInfo,SetUserInfo] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await authService.getUserById(props.id);
          SetUserInfo(res.data.data)
        } catch (err) {
          console.error(err);
        }
      };
  
       fetchData();
    }, []);
     const username = userInfo?.email.split("@")[0]
  return (
    <div className="flex items-center justify-between p-3 rounded-lg">
      <Link to={`/dashboard-profile/${username}`} state={{ id:username }}>
        <div className="flex items-center gap-3">
          <img
            src={porfilphoto}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-semibold">{props.name}</span>
            <span className="text-sm dark:text-white text-gray-500">
              {props.followers} followers
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
