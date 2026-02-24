interface PorfileStatsProps {
  followings: number;
  followers: number;
  posts: number;
}

const PorfileStats = ({ followings, followers, posts }: PorfileStatsProps) => {
  return (
    <div className="flex items-center justify-between dark:bg-black mt-4">
      <div className="flex flex-col items-center">
        <span className="font-semibold dark:text-white">{followings}</span>
        <span className="text-sm text-gray-500 dark:text-white">
          Followings
        </span>
      </div>

      <div className="flex flex-col items-center">
        <span className="font-semibold dark:text-white">{followers}</span>
        <span className="text-sm text-gray-500 dark:text-white">Followers</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="font-semibold dark:text-white">{posts}</span>
        <span className="text-sm text-gray-500 dark:text-white">Posts</span>
      </div>
    </div>
  );
};

export default PorfileStats;
