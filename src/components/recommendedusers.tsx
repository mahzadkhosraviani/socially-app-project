import UserList from "./userlist";

const RecommendedUsers = () => {
  const users = [
    { id: "1", name: "Niusha", followers: 12 },
    { id: "2", name: "Moones", followers: 5 },
    { id: "3", name: "Mahdi", followers: 20 },
  ];

  return (
    <div className="p-4    dark:bg-[#0A0A0A] dark:border dark:border-[#262626] rounded-2xl shadow hidden md:block  md:h-72 md:w-100 mr-3">
      <h2 className="text-lg dark:text-[#FAFAFA] font-bold mb-4 ml-3 ">
        Recommended Users
      </h2>
      <UserList users={users} />
    </div>
  );
};

export default RecommendedUsers;
