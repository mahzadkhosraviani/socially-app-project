import PorfileCard from "./PorfileCard";
import PorfileStats from "./PorfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";
import { useAuth } from "../context/authContext";
import { useUserPostsCount } from "../hooks/use-userPostsCount";
import { useUserProfile } from "../hooks/use-UserProfile";
import { useToggleFollow } from "../hooks/use-ToggleFollow";

interface ProfileContainerProps {
  user1: any;
  onEditClick: () => void;
}

const ProfileContainer = ({ user1, onEditClick }: ProfileContainerProps) => {
  const { user } = useAuth();

  const { data: profile, isLoading } = useUserProfile(user1.id);

  const finalUser = profile ?? user1;

  const { toggleFollow, isPending } = useToggleFollow();

  const mainUser = finalUser.id === user.id;

  const { data: postsCount } = useUserPostsCount(finalUser.id);

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
          label={user1.isFollowing ? "Unfollow" : "Follow"}
          onClick={() => toggleFollow(finalUser.id)}
          disabled={isPending}
        />
      )}

      {mainUser && <EditButton label="Edit Profile" onClick={onEditClick} />}

      <UserInfo user1={finalUser} />
    </div>
  );
};

export default ProfileContainer;
