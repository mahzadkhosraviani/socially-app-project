import PorfileCard from "./PorfileCard";
import PorfileStats from "./PorfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";
import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

const ProfileContainer = ({ user }: { user: any }) => {
  const hasCountsFromProps = !!(user?._count?.followings || user?._count?.followers);

  const { data: userInfoNew } = useQuery({
    queryKey: ["userInfo", user?.id],
    queryFn: async () => {
      const res = await authService.getUserById(user.id);
      return res.data.data;
    },
    enabled: !!user?.id && !hasCountsFromProps,
  });

  const { data: userPosts, isLoading: postsLoading } = useQuery({
    queryKey: ["userPosts", user?.id],
    queryFn: async () => {
      const res = await authService.getUserPosts(user.id);
      return res.data.data;
    },
    enabled: !!user?.id,
  });

  const following = user?._count?.followings ?? userInfoNew?._count?.followings;
  const followers = user?._count?.followers ?? userInfoNew?._count?.followers;
  const postsCount = userPosts?.length ?? 0;
  const mainUser = !hasCountsFromProps;
  const isReady = !postsLoading;

  if (!isReady) {
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
      <PorfileCard user={user} />
      <PorfileStats followings={following} followers={followers} posts={postsCount} />
      {!mainUser && <EditButton label="Follow" />}
      {mainUser && <EditButton label="Edit Profile" />}
      <UserInfo user={user} />
    </div>
  );
};

export default ProfileContainer;