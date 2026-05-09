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

import LayoutHome from "../components/layout";
import { useQuery } from "@tanstack/react-query";

function DashboardHome() {
  const { user } = useAuth();
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
      <LayoutHome>
        <CreatePost />
        <PostFeed />
      </LayoutHome>
    </>
  );
}

export default DashboardHome;
