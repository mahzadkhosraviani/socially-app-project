import React from "react";
import Profile from "../components/profile";
import CreatePost from "../components/createPost";
import PostCard from "../components/postCard";
import RecommendedUsers from "../components/recommendedusers";
import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
function DashboardHome() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row pt-5 gap-7.5 dark:bg-[#0A0A0A]">
        <Profile />
        <div className="flex flex-col">
     
        <CreatePost />
        <PostCard />
        </div>
        
        <RecommendedUsers />
      </div>
    </>
  );
}

export default DashboardHome;
