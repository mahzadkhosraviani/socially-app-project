import React, { useEffect } from "react";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import RecommendedUsers from "../components/RecommendedUsers";
import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import PostFeed from "../components/PostFeed";
import { useAuth } from "../context/AuthContext";

import { authService } from "../services/authService";

import { useUserByUsername } from "../hooks/use-username";
import LayoutHome from "../components/LayoutHome";

function DashboardHome() {
  const { user, loading } = useAuth();
  const username = user.email.split("@")[0];
  

  const { data: userInfo, isLoading, error } = useUserByUsername(username);

  
  return (
    <>
      <LayoutHome>
        <CreatePost />
        <PostFeed />
      </LayoutHome>
    </>
  );
}

export default DashboardHome;
