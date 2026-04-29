import { useEffect, useState } from "react";
import PostCard from "./postCard";
import { authService } from "../services/authService";
type Props = {
  userId: string;
  activeTab: "posts" | "likes";
};
type Post = {
  id: string;
  content: string;
};
const ProfileContent = ({ userId, activeTab }: Props) => {
  const [items, setItems] = useState<Post[] | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res =
          activeTab === "posts"
            ? await authService.getUserPosts(userId)
            : await authService.getUserLikes(userId);
        console.log("RESPONSE:", res.data.data);
        setItems(res.data.data);
      } catch (error) {
        console.error("Failed to load posts:", error);
        setItems([]);
      }
    };

    load();
  }, [activeTab, userId]);

  console.log("activeTab:", activeTab);
  return (
    <div className="mt-1 mb-2 flex flex-col  ">
      {items === null ? (
        <div className="flex flex-col gap-4 mt-6 animate-pulse">
          <div className="h-27 rounded-lg bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="h-27 rounded-lg bg-zinc-200 dark:bg-zinc-800"></div>
        </div>
      ) : items.length === 0 ? (
        <div className="text-md">
          {activeTab === "posts" ? (
            <div className="flex flex-col p-2 px-3 gap-2 bg-black text-left text-white dark:bg-white rounded-lg font-semibold ">
              <p className="dark:text-black text-white">There is no post.</p>
              <p className=" text-white text-sm dark:text-[#373636]">
                This user has not posted anything.
              </p>
            </div>
          ) : (
            <div className="flex flex-col p-2 px-3 gap-2 bg-black text-left text-white dark:bg-white rounded-lg font-semibold  ">
              <p className="dark:text-black text-white">There is no like.</p>
              <p className=" text-white text-sm dark:text-[#373636]">
                This user has not liked any post.
              </p>
            </div>
          )}
        </div>
      ) : (
        items.map((p) => <PostCard key={(p.post ?? p).id} post={p.post ?? p} />)
      )}
    </div>
  );
};

export default ProfileContent;
