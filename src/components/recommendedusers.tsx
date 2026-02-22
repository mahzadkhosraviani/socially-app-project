import UserList from "./userlist";

const RecommendedUsers = () => {
  const users = [
    { id: "1", name: "Niusha", followers: 12 },
    { id: "2", name: "Moones", followers: 5 },
    { id: "3", name: "Mahdi", followers: 20 },
  ];

  return (
    <div className="p-4  bg-white dark:bg-black dark:border dark:border-[#262626] rounded-lg shadow hidden md:block lg:h-75 lg:w-80 md: h-75 md:w-67.5 ml-auto ">
      <h2 className="text-lg dark:text-white font-bold mb-4">
        Recommended Users
      </h2>
      <UserList users={users} />
    </div>
  );
};

export default RecommendedUsers;
