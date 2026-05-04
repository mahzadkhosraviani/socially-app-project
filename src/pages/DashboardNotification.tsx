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
        <div className="hidden md:block  "><Profile/></div>
        <NotificationBox/>
      </div>
    </div>
  );
}

export default DashboardNotification;
