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

import Layout from "../components/layout";
import LayoutHome from "../components/layout";
import { useUserByUsername } from "../hooks/use-username";

function DashboardHome() {
const { user, loading } = useAuth();
const username = user.email.split("@")[0];
//  useEffect(() => {

//     const fetchData = async () => {
//       try {
//        const res = await authService.getUser(username);
       
//        console.log(res.data.data)
//       } catch (err) {
//         console.error(err);
//       }
//     };

//      fetchData();
//   }, [username]);

const { data: userInfo, isLoading, error } = useUserByUsername(username);

if (userInfo) {
  console.log(userInfo);
}

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
