import Usercard from "./usercard";

interface User {
  id: string;
  name: string;
  followers: number;
}

interface UserListProps {
  users: User[];
}

const UserList = (props: UserListProps) => {
  return (
    <div className="flex flex-col dark:text-white gap-4">
      {props.users.map((u) => (
        <Usercard key={u.id} id={u.id} name={u.name} followers={u.followers} />
      ))}
    </div>
  );
};

export default UserList;
