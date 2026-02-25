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
    <div className="w-[550px] mx-auto h-110 p-4 bg-white dark:bg-black dark:border-[#262626] dark:border rounded-2xl shadow flex flex-col gap-4 mb-7">
      <PorfileCard name={name} username={username} avatar={avatar} />
      <PorfileStats
        followings={1}
        followers={2}
        posts={3}
      />
      <EditButton label="Edit Profile" />

      <UserInfo location={location} website={website} createdAt={createdAt} />
    </div>
  );
};

export default ProfileContainer;
