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

  // if (userInfo) {
  //   console.log(userInfo);
  // }
  // import LayoutHome from "../components/layoutHome";
  // import { useQuery } from "@tanstack/react-query";

  // function DashboardHome() {
  //   const { user } = useAuth();
  //   const username = user.email.split("@")[0];
  //    useEffect(() => {
  //       const fetchData = async () => {
  //         try {
  //          const res = await authService.getUser(username);
  //          console.log(res.data.data)
  //         } catch (err) {
  //           console.error(err);
  //         }
  //       };

  //        fetchData();
  //     }, []);

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
