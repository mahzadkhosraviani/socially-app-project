interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
}

const FollowButton = ({ isFollowing, onClick }: FollowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-black bg-white font-semibold dark:text-[#FAFAFA] border-solid border-[#E5E5E5] dark:border-[#262626] border rounded-md hover:bg-[#E5E5E5] transition dark:bg-[#262626]"
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
