import location from "../assets/location..svg";
import link from "../assets/link.svg";
import calender from "../assets/calender.svg";

const UserInfo = () => {
  return (
    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-white mt-2">
      <div className="flex items-center gap-2">
        <img src={location} className="w-4 h-4" />
        <span>No location</span>
      </div>

      <div className="flex items-center gap-2">
        <img src={link} className="w-4 h-4" />
        <span>No website</span>
      </div>

      <div className="flex items-center  gap-2">
        <img src={calender} className="w-4 h-4" />
        <span>7 days ago</span>
      </div>
    </div>
  );
};

export default UserInfo;
