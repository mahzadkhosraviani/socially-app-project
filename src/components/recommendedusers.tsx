import { useEffect, useState } from "react";
import UserList from "./userlist";
import { recommendService } from "../services/recommendService";
import type { RecommendedUser } from "../services/recommendService";

interface RecommendedUsersProps {
  onFollowChange?: () => void;
}

const RecommendedUsers = ({ onFollowChange }: RecommendedUsersProps) => {
  const [users, setUsers] = useState<RecommendedUser[]>([]);

  useEffect(() => {
    recommendService.getRecommended().then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  const toggleFollow = async (id: string) => {
    try {
      await recommendService.toggleFollow(id);

      setUsers((prev) => prev.filter((u) => u.id !== id));

      if (onFollowChange) onFollowChange();

      window.dispatchEvent(new Event("follow-updated"));
      const res = await recommendService.getRecommended();
      setUsers(res.data.data);
    } catch (err) {
      console.error("Follow error:", err);
    }
  };

  return (
    <div className="p-4 dark:bg-[#171717] dark:border dark:border-[#262626] border border-gray-200 shadow-lg rounded-2xl shadow hidden md:block md:h-72 md:w-75 mr-3">
      <h2 className="text-lg dark:text-[#FAFAFA] font-bold mb-4 ml-3">
        Recommended Users
      </h2>
      <UserList users={users} onToggleFollow={toggleFollow} />
    </div>
  );
};

export default RecommendedUsers;
