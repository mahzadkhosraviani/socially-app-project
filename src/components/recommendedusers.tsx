import UserList from "./UserList";
import { useRecommendedUsers } from "../hooks/use-recommendedUsers";

const RecommendedUsers = () => {
  const { users, isLoading, toggleFollow } = useRecommendedUsers();

  if (isLoading) return null;

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
