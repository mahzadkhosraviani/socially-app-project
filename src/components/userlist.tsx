import Usercard from "./usercard";
import type { RecommendedUser } from "../services/recommendService";
import { Link } from "react-router-dom";

interface User {
  id: string;
  name: string;
  followers: number;
}

interface UserListProps {
  users: RecommendedUser[];
  onToggleFollow: (id: string) => void;
}

const UserList = (props: UserListProps) => {
  return (
    <div className="flex flex-col dark:text-[#FAFAFA] gap-1">
      {props.users.map((u) => {
        console.log("set",u);
        return (
          <Usercard
            key={u.id}
            id={u.id}
            name={u.name}
            _count={u._count}
            isFollowing={u.isFollowing}
            onToggleFollow={props.onToggleFollow}
          />
        );
      })}
      {/* {props.users.map((u) => (
    
          
            <Usercard
            key={u.id}
            id={u.id}
            name={u.name}
            followers={u.followers}
            isFollowing={u.isFollowing}
            onToggleFollow={props.onToggleFollow}
          />
       
          
        ))} */}
    </div>
  );
};

export default UserList;
