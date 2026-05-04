import setAvatarColors from "../utils/setAvatarColors";

const PorfileCard = ({ user }) => {
  const username = user.email.split("@")[0];
  const avatar = user.name.split("")[0];
  return (
    <div className="flex flex-col items-center gap-4 mt-1.5">
      <div
        className={`w-16 h-16 flex items-center justify-center text-white font-bold ${setAvatarColors(user.name)} rounded-full`}
      >
        {avatar}
      </div>
      <div className="flex flex-col text-center">
        <span className="text-lg dark:text-white font-bold">{user?.name}</span>
        <span className="text-gray-500 dark:text-white">{username}</span>
      </div>
    </div>
  );
};

export default PorfileCard;
