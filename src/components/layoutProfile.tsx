import Navbar from "./Navbar";
import Profile from "./profile";

const LayoutProfile = ({ children }) => {
  return (
    <div className=" bg-white dark:bg-[#0A0A0A] flex flex-col">
      <Navbar />

      <div className="flex flex-row  gap-6 mt-7 ">
        <div className="hidden md:block ">
          <Profile />
        </div>
        <div className="flex flex-1 flex-col  md:mx-auto w-full mx-5 mb-3  ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutProfile;
