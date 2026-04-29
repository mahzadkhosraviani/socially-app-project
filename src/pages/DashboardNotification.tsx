import Profile from "../components/profile";
import Navbar from "../components/Navbar";
import NotificationBox from "../components/Notificationbox";
import { useAuth } from "../context/authContext";
function DashboardNotification() {
  const {user} = useAuth()
  return (
    <div>
      <Navbar />
      <div className=" flex flex-row gap-4 pt-5 dark:bg-[#0A0A0A]">
        <Profile user={user} />
        <NotificationBox/>
      </div>
    </div>
  );
}

export default DashboardNotification;
