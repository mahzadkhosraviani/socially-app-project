import Navbar from "./Navbar";
import Profile from "./profile";
import RecommendedUsers from "./recommendedusers";

function LayoutHome({ children }) {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#0A0A0A]">
      <Navbar />

      <div className="  mt-4 flex overflow-hidden">
        <div className="hidden md:flex flex-1 flex-row  gap-7.5 p-4">
          <Profile />
        </div>

        <main className="overflow-y-auto">
          <div className="md:pt-4 px-4 max-w-xl mx-auto flex flex-col ">
            {children}
          </div>
        </main>

        <div className="hidden md:block overflow-y-auto p-4 mr-12 ml-7 ">
          <RecommendedUsers />
        </div>
      </div>
    </div>
  );
}
export default LayoutHome;
