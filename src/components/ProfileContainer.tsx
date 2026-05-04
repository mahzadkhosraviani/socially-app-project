import PorfileCard from "./PorfileCard";
import PorfileStats from "./PorfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";

const ProfileContainer = ({ user }: { user: any }) => {
  const [userInfoNew, setUserInfoNew] = useState<any>(null);
  const [postsCount, setPostsCount] = useState<number>(0);
  const [mainUser, setMainUser] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const following = user?._count?.followings ?? userInfoNew?._count?.followings;
  const followers = user?._count?.followers ?? userInfoNew?._count?.followers;

  // Fetch posts count using the existing authService method
  const fetchPostsCount = async (userId: string) => {
    try {
      const response = await authService.getUserPosts(userId);
      // The response structure: { data: { data: Post[] } }
      const postsArray = response.data.data;
      setPostsCount(postsArray.length);
    } catch (err) {
      console.error("Failed to fetch posts count:", err);
      setPostsCount(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch full user data if counts are missing (for the main user's own profile)
        if (!following && !followers) {
          const res = await authService.getUserById(user.id);
          setUserInfoNew(res.data.data);
        }
        // Always fetch the post count
        await fetchPostsCount(user.id);
      } catch (err) {
        console.error(err);
      } finally {
        setIsReady(true);
      }
    };

    if (!following && !followers) {
      setMainUser(true);
      fetchData();
    } else {
      setMainUser(false);
      fetchPostsCount(user.id).finally(() => setIsReady(true));
    }
  }, [user?.id]);

  if (!isReady) {
    return (
      <div className=" w-full max-w-130 h-auto  p-4 bg-white dark:bg-[#171717] dark:border-[#262626] dark:border rounded-2xl shadow flex flex-col gap-4 mb-7">
        <div className="h-6 w-40 bg-gray-300 dark:bg-[#333] animate-pulse rounded"></div>
        <div className="h-4 w-24 bg-gray-300 dark:bg-[#333] animate-pulse rounded"></div>
        <div className="h-10 w-28 bg-gray-300 dark:bg-[#333] animate-pulse rounded"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-120 mx-auto h-auto  p-4 bg-white dark:bg-[#171717] dark:border-[#262626] border-gray-200 shadow-lg border rounded-2xl flex flex-col gap-4 mb-7">
      <PorfileCard user={user} />
      <PorfileStats
        followings={following}
        followers={followers}
        posts={postsCount}
      />
      {!mainUser && <EditButton label="Follow" />}
      {mainUser && <EditButton label="Edit Profile" />}
      <UserInfo user={user} />
    </div>
  );
};

export default ProfileContainer;