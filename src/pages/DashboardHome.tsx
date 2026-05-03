import React from "react";
import Profile from "../components/profile";
import CreatePost from "../components/createPost";
import PostCard from "../components/postCard";
import RecommendedUsers from "../components/recommendedusers";
import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import PostFeed from "../components/PostFeed";
import { useAuth } from "../context/authContext";
import Layout from "../components/layout";
function DashboardHome() {
const {user} = useAuth()

  return (
    <>

     <Layout>
      <CreatePost />
      <PostFeed />
    </Layout>
    </>
  );
}

export default DashboardHome;
