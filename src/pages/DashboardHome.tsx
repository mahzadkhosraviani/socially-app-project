import React from "react";
import Profile from "../components/profile";
import CreatePost from "../components/createPost";
import PostCard from "../components/postCard";
import RecommendedUsers from "../components/recommendedusers";
import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import PostFeed from "../components/PostFeed";
import { useAuth } from "../context/authContext";
function DashboardHome() {
const {user} = useAuth()
console.log(user)



  return (
    <>
      <Navbar />
      <div className="flex flex-row pt-5 gap-7.5 dark:bg-[#0A0A0A]">
        <Profile user={user} />
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
