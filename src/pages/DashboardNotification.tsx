import Profile from "../components/profile";
import Navbar from "../components/Navbar";
import NotificationBox from "../components/Notificationbox";
import { useAuth } from "../context/authContext";
function DashboardNotification() {
  const {user} = useAuth()
  return (
    <div className="bg-white dark:bg-[#0A0A0A]">
      <Navbar />
      <div className="min-h-screen mt-6 md:mt-8 flex flex-row gap-4 mx-5 dark:bg-[#0A0A0A]">
        <div className="hidden md:block"><Profile/></div>
        <div className="flex-col w-full max-w-4xl mx-auto mb-4 rounded-2xl  bg-white dark:bg-[#171717] border border-gray-200 shadow-lg dark:border-[#2a2a2a] max-h-100 md:max-h-120 overflow-y-auto md:mr-19"><NotificationBox/></div>
      </div>
    </div>
  );
}

export default DashboardNotification;
