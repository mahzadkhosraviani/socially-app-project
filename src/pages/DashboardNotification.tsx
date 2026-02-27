import Profile from "../components/profile";
import Navbar from "../components/Navbar";
import NotificationBox from "../components/Notificationbox";
function DashboardNotification() {
  return (
    <div>
      <Navbar />
      <div className=" flex flex-row gap-4 pt-5 dark:bg-[#0A0A0A]">
        <Profile />
        <NotificationBox/>
      </div>
    </div>
  );
}

export default DashboardNotification;
