import porfilephoto from "../assets/profile photo.svg";


 const PorfileCard = ({user}) => {
  const username = user.email.split("@")[0];
  const avatar = user.name.split("")[0]
  return (
    <div className="flex flex-col items-center gap-4 mt-1.5">
      <img
        src={porfilephoto}
        alt="profile"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex flex-col text-center">
        <span className="text-lg dark:text-white font-bold">{user?.name}</span>
        <span className="text-gray-500 dark:text-white">{username}</span>
      </div>
    </div>
  );
};

export default PorfileCard;
