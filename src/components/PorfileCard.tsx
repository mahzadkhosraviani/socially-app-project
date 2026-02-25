import porfilephoto from "../assets/profile photo.svg";
interface PorfileCardProps {
  name: string;
  username: string;
  avatar: string;
}

const PorfileCard = ({ name, username, avatar }: PorfileCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-1.5">
      <img
        src={porfilephoto}
        alt="profile"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex flex-col text-center">
        <span className="text-lg dark:text-white font-bold">{name}</span>
        <span className="text-gray-500 dark:text-white">{username}</span>
      </div>
    </div>
  );
};

export default PorfileCard;
