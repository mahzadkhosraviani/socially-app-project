import React, { useEffect } from "react";
import Profile from "../components/profile";
import CreatePost from "../components/createPost";
import PostCard from "../components/postCard";
import RecommendedUsers from "../components/recommendedusers";
import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import PostFeed from "../components/PostFeed";
import { useAuth } from "../context/authContext";
import { authService } from "../services/authService";
function DashboardHome() {
const {user} = useAuth()
const username = user.email.split("@")[0];
 useEffect(() => {
    const fetchData = async () => {
      try {
       const res = await authService.getUser(username);
       console.log(res.data.data)
      } catch (err) {
        console.error(err);
      }
    };

     fetchData();
  }, []);

  return (
    <>

      <Navbar />
      <div className="flex flex-row pt-5 gap-7.5 dark:bg-[#0A0A0A]">
        <Profile />
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
          <CreatePost />
          <PostFeed />
        </div>

        <RecommendedUsers />
      </div>
    </>
  );
}

export default DashboardHome;
