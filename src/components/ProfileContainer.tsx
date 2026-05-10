import PorfileCard from "./PorfileCard";
import PorfileStats from "./PorfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";
import { authService } from "../services/authService";
import { useAuth } from "../context/authContext";
import { useState , useEffect} from "react";
import { useUserPostsCount } from "../hooks/use-userPostsCount";  // <-- new import



// interface ProfileContainerProps {
// name: string;
// username: string;
// avatar: string;
// followings: number;
// followers: number;
// posts: number;
// location?: string;
// website?: string;
// createdAt: string;
// }
interface ProfileContainerProps {
  user: any;
  onEditClick: () => void;
}

const ProfileContainer = ({ user1, onEditClick }: ProfileContainerProps) => {
  const { user } = useAuth();
  const [userInfoNew, setUserInfoNew] = useState(null);
  // const [postsCount, setPostsCount] = useState<number>(0);   // <-- removed, now from hook
  
  
  // const ProfileContainer = ({ user }: { user: any }) => {

  const following =
    user1?._count?.followings ?? userInfoNew?._count?.followings;

  const followers = user1?._count?.followers ?? userInfoNew?._count?.followers;
  const [mainUser, setMainUser] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const hasCountsFromProps = !!(
    user?._count?.followings || user?._count?.followers
  );

  // Use the custom hook to fetch posts count
  const { data: postsCount, isLoading: postsLoading } = useUserPostsCount(user1?.id);

  // const { data } = useQuery({
  // queryKey: ["userInfo", user?.id],
  // queryFn: async () => {
  // const res = await authService.getUserById(user.id);
  // return res.data.data;
  // },
  // enabled: !!user?.id && !hasCountsFromProps,
  // });

  // const { data: userPosts, isLoading: postsLoading } = useQuery({
  // queryKey: ["userPosts", user?.id],
  // queryFn: async () => {
  // const res = await authService.getUserPosts(user.id);
  // return res.data.data;
  // },
  // enabled: !!user?.id,
  // });

  // Fetch posts count using the existing authService method
  // const fetchPostsCount = async (userId: string) => {
  //   try {
  //     const response = await authService.getUserPosts(userId);
  //     // The response structure: { data: { data: Post[] } }
  //     const postsArray = response.data.data;
  //     setPostsCount(postsArray.length);
  //   } catch (err) {
  //     console.error("Failed to fetch posts count:", err);
  //     setPostsCount(0);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUserById(user1.id);
        setUserInfoNew(res.data.data);

        // Fetch full user data if counts are missing (for the main user's own profile)
        // if (!following && !followers) {
        // const res = await authService.getUserById(user.id);
        // setUserInfoNew(res.data.data);
        // }
        // Always fetch the post count
        // await fetchPostsCount(user1.id);   // <-- removed
      } catch (err) {
        console.error(err);
      } finally {
        setIsReady(true);
      }
    };

    if (user1.id === user.id) {
      setMainUser(true);
      fetchData();
    } else {
      fetchData();
      setMainUser(false);
      // fetchPostsCount(user.id).finally(() => setIsReady(true));   // <-- removed
    }
  }, [user1?.id]);

  // Combine readiness: user info loaded AND posts count loaded
  useEffect(() => {
    if (userInfoNew !== null && !postsLoading) {
      setIsReady(true);
    }
  }, [userInfoNew, postsLoading]);

  console.log("mainnnnnnn:", user1);
  // const fetchUser = async () => {
  // try {
  // const res = await authService.getUserById(user.id);
  // setUserInfoNew(res.data.data);
  // } catch (err) {
  // console.error(err);
  // }
  // };

  // useEffect(() => {
  // if (user?.id) fetchUser();
  // }, [user?.id]);
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
      <PorfileCard user={user1} />

      <PorfileStats
        followings={following}
        followers={followers}
        posts={postsCount}
      />

      {!mainUser && <EditButton label="Follow" />}
      {mainUser && <EditButton label="Edit Profile" onClick={onEditClick} />}

      {/* <UserInfo user={user} /> */}
      <UserInfo user1={user1} />

      {/* <div className="w-full max-w-120 mx-auto h-auto p-4 bg-white dark:bg-[#171717] dark:border-[#262626] border-gray-200 shadow-lg border rounded-2xl flex flex-col gap-4 mb-7">

<PorfileCard user={user} />
<PorfileStats followings={following} followers={followers} posts={postsCount} />
{!mainUser && <EditButton label="Follow" />}
{mainUser && <EditButton label="Edit Profile" />}
<UserInfo user={user} /> */}
    </div>
  );
};

export default ProfileContainer;