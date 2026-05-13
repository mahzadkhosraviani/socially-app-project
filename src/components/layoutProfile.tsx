import Navbar from "./Navbar";
import Profile from "./Profile";

const LayoutProfile = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#0A0A0A] ">
      <Navbar />

      <div className="flex flex-1 overflow-hidden flex-row gap-6 ">
        <aside className="hidden md:block ">
          <div className="sticky md:ml-5 md:pt-8 overflow-hidden ">
            <Profile />
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-1 flex-col md:pt-8 pt-5 md:mr-20 md:max-w-240 md:w-full mx-2 mb-3  ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutProfile;
