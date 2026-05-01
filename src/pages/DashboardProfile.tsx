import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import Profile from "../components/profile";
import RecommendedUsers from "../components/recommendedusers";
import Likes_Posts_Profile from "../components/Likes&PostsProfile";

import { useAuth } from "../context/authContext";

import MainProfile from "../components/MainProfile";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";

function DashboardProfile() {
  const {user} = useAuth()
  const { username } = useParams();
  const location = useLocation();
  const [userInfoNew, setUserInfoNew] = useState(null);
  const userId = location.state?.id;
  
   useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await authService.getUserById(userId);
      console.log("Fetched user by ID:", res.data.data);
      setUserInfoNew(res.data.data);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  if (userId) fetchData();
}, [userId]);

  return (
    <div>
      <Navbar />

      <div className="flex flex-row gap-6 pt-5 dark:bg-[#0A0A0A]">
        <Profile  />
        <div className="flex flex-col">

          <ProfileContainer user = {userInfoNew ?? user} />
          <MainProfile user={userInfoNew ?? user} />

        </div>
      </div>
    </div>
  );
}

export default DashboardProfile;