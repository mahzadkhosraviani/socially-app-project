import Navbar from "./Navbar";
import Profile from "./profile";
import RecommendedUsers from "./recommendedusers";

function LayoutHome({ children }) {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#0A0A0A]">
      <Navbar />

      
       <div className="flex flex-1 overflow-hidden ">
        <aside className="hidden md:block ">
          <div className="sticky md:flex flex-1 flex-row  gap-7.5 p-3 mr-6  overflow-hidden md:pt-8">
            <Profile />
          </div>
        </aside>


        <main className="overflow-y-auto">
          <div className="md:pt-8 px-4 max-w-xl mx-auto flex flex-col ">
            {children}
          </div>
        </main>

        <div className="hidden sticky md:block overflow-hidden p-4 mr-12 ml-7 md:pt-8 ">
          <RecommendedUsers />
        </div>
      </div>
    </div>
  );
}
export default LayoutHome;
