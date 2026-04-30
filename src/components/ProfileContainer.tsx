import PorfileCard from "./PorfileCard";
import PorfileStats from "./PorfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";

interface ProfileContainerProps {
  name: string;
  username: string;
  avatar: string;
  followings: number;
  followers: number;
  posts: number;
  location?: string;
  website?: string;
  createdAt: string;
}

const ProfileContainer = ({ user }) => {
  const [userInfoNew, setUserInfoNew] = useState(null);
  const following = user?._count?.followings ?? userInfoNew?._count?.followings;
  const followers = user?._count?.followers ?? userInfoNew?._count?.followers;
  const [mainUser, setMainUser] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(user.id);
        setUserInfoNew(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (!following && !followers) {
      setMainUser(true);
      fetchData();
    } else {
      setMainUser(false);
    }
  }, [user?.id]);
  
  return (
    <div className="w-[550px] mx-auto h-110 p-4 bg-white dark:bg-black dark:border-[#262626] dark:border rounded-2xl shadow flex flex-col gap-4 mb-7">
      <PorfileCard user={user} />

      <PorfileStats followings={following} followers={followers} posts={3} />
      {!mainUser && <EditButton label="Follow" />}
      {mainUser && <EditButton label="Edit Profile" />}

      <UserInfo user={user} />
    </div>
  );
};

export default ProfileContainer;
