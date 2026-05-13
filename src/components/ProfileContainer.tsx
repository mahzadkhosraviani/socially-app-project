import PorfileCard from "./ProfileCard";
import PorfileStats from "./ProfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";
import { useAuth } from "../context/AuthContext";
import { useUserPostsCount } from "../hooks/use-userPostsCount";
import { useUserProfile } from "../hooks/use-userProfile";
import { useToggleFollow } from "../hooks/use-toggleFollow";
import { useEffect, useState } from "react";
import { ko } from "zod/v4/locales";

interface ProfileContainerProps {
  user1: any;
  onEditClick: () => void;
}

const ProfileContainer = ({ user1, onEditClick }: ProfileContainerProps) => {
  const { user } = useAuth();

  console.log("user1.isFollowing:", user1?.isFollowing);

  //   useEffect(() => {
  //   if (user1) {
  //     console.log("user1 updated:", user1);
  //   }
  // }, [user1]);

  const { data: profile, isLoading } = useUserProfile(user1.id);

  const finalUser = profile ?? user1;

  const { toggleFollow, isPending } = useToggleFollow();

  const mainUser = finalUser.id === user.id;

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    toggleFollow(finalUser.id);
  };

  // useEffect(()=>{
  // setExist(user1?.followers.some(f => f.followerId === user.id));
  // },)

  //   // بررسی اینکه آیا آیدی من در لیست فالورهای این کاربر هست یا نه
  const exists = user1?.followers?.some((f: any) => f.followerId === user?.id);
  const [isFollowing, setIsFollowing] = useState(exists);
  useEffect(() => {
    setIsFollowing(exists);
  }, [exists]);

  // مقدار را در استیت ذخیره کن

  // const finalUser = profile ?? user1;

  // const exists =
  // Array.isArray(finalUser?.followers) &&
  // finalUser.followers.some((f: any) => f.followerId === user.id);

  const { data: postsCount } = useUserPostsCount(finalUser.id);
  //   useEffect(() => {
  //   console.log("FINAL USER =>", finalUser);
  //   console.log("IS FOLLOWING =>", finalUser?.isFollowing);
  // }, [finalUser]);

  if (isLoading) {
    return (
      <div className="w-full max-w-130 h-auto p-4 bg-white dark:bg-[#171717] dark:border-[#262626] dark:border rounded-2xl shadow flex flex-col gap-4 mb-7">
        <div className="h-6 w-40 bg-gray-300 dark:bg-[#333] animate-pulse rounded"></div>
        <div className="h-4 w-24 bg-gray-300 dark:bg-[#333] animate-pulse rounded"></div>
        <div className="h-10 w-28 bg-gray-300 dark:bg-[#333] animate-pulse rounded"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-120 mx-auto h-auto p-4 bg-white dark:bg-[#171717] dark:border-[#262626] border-gray-200 shadow-lg border rounded-2xl flex flex-col gap-4 mb-7">
      <PorfileCard user={finalUser} />

      <PorfileStats
        followings={finalUser._count?.followings}
        followers={finalUser._count?.followers}
        posts={postsCount}
      />

      {!mainUser && (
        <EditButton
          label={isFollowing ? "UnFollow" : "Follow"}
          // onClick={() => toggleFollow(finalUser.id)}
          onClick={handleFollow}
          disabled={isPending}
        />
      )}

      {mainUser && <EditButton label="Edit Profile" onClick={onEditClick} />}

      <UserInfo user1={finalUser} />
    </div>
  );
};

export default ProfileContainer;
