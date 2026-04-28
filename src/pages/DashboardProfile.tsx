import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import Profile from "../components/profile";
import RecommendedUsers from "../components/recommendedusers";
import Likes_Posts_Profile from "../components/Likes&PostsProfile";
import MainProfile from "../components/MainProfile";

function DashboardProfile() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-row gap-6 pt-5 dark:bg-[#0A0A0A]">
        <Profile />
        <div className="flex flex-col">
          <ProfileContainer name="nastaran" username="nastaranadib" />
          <MainProfile />
        </div>
      </div>
    </div>
  );
}

export default DashboardProfile;
