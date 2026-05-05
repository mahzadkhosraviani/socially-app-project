import PostCard from "./postCard";
import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

type Props = {
  userId: string;
  activeTab: "posts" | "likes";
};

const ProfileContent = ({ userId, activeTab }: Props) => {
  const { data: items, isLoading } = useQuery({
    queryKey: ["profileContent", userId, activeTab],
    queryFn: async () => {
      const res = activeTab === "posts"
        ? await authService.getUserPosts(userId)
        : await authService.getUserLikes(userId);
      return res.data.data;
    },
    enabled: !!userId,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 mt-6 animate-pulse">
        <div className="h-27 rounded-lg bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-27 rounded-lg bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="text-md">
        {activeTab === "posts" ? (
          <div className="md:max-w-235 mt-4 flex flex-col p-2 px-3 gap-2 bg-black text-left text-white dark:bg-white rounded-lg font-semibold">
            <p className="text-bold dark:text-black text-white">There is no post.</p>
            <p className="text-white text-sm dark:text-[#373636]">This user has not posted anything.</p>
          </div>
        ) : (
          <div className="md:max-w-235 mt-4 flex flex-col p-2 px-3 gap-2 bg-black text-left text-white dark:bg-white rounded-lg font-semibold">
            <p className="text-bold dark:text-black text-white">There is no like.</p>
            <p className="text-white text-sm dark:text-[#373636]">This user has not liked any post.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-1 mb-2 flex flex-col">
      {items.map((p: any) => <PostCard key={(p.post ?? p).id} post={p.post ?? p} />)}
    </div>
  );
};

export default ProfileContent;