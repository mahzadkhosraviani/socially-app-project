import PorfileCard from "./PorfileCard";
import PorfileStats from "./PorfileState";
import EditButton from "./EditButton";
import UserInfo from "./UserInfo";

interface ProfileContainerProps {
  name: string;
  username: string;
  avatar: string;
  followings: number;
  followers: number;
  posts: number;
  location?: string;
  website?: string;
  createdAt: string;
}

const ProfileContainer = ({
  name,
  username,
  avatar,
  followings,
  followers,
  posts,
  location,
  website,
  createdAt,
}: ProfileContainerProps) => {
  return (
    <div className="w-[500px] m-auto h-auto p-4 bg-white dark:bg-black dark:border-[#262626] dark:border rounded-xl shadow flex flex-col gap-4">
      <PorfileCard name={name} username={username} avatar={avatar} />

      <EditButton label="Edit Profile" />

      <PorfileStats
        followings={followings}
        followers={followers}
        posts={posts}
      />

      <UserInfo location={location} website={website} createdAt={createdAt} />
    </div>
  );
};

export default ProfileContainer;
