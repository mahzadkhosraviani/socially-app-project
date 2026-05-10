// import { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { useQuery, useQueryClient } from "@tanstack/react-query";

// import Navbar from "../components/Navbar";
// import ProfileContainer from "../components/ProfileContainer";
// import Profile from "../components/profile";
// import RecommendedUsers from "../components/recommendedusers";
// import Likes_Posts_Profile from "../components/Likes&PostsProfile";
// import MainProfile from "../components/MainProfile";
// import EditProfile from "../components/EditProfile";
// import LayoutProfile from "../components/layoutProfile";

// import { useAuth } from "../context/authContext";
// import { authService } from "../services/authService";

// function DashboardProfile() {
//   const { user } = useAuth();
//   const { username } = useParams();
//   const location = useLocation();
//   const userId = location.state?.id;

//   const [isEditOpen, setIsEditOpen] = useState(false);

//   const queryClient = useQueryClient();


//   const { data: userByUsername } = useQuery({
//     queryKey: ["user-profile", username],
//     queryFn: async () => {
//       const res = await authService.getUser(username);
//       return res.data.data;
//     },
//     enabled: !!username,

//   });

//   const { data: userById } = useQuery({
//     queryKey: ["user-by-id", userId],
//     queryFn: async () => {
//       const res = await authService.getUserById(userId);
//       return res.data.data;
//     },
//     enabled: !!userId,

//   });

//   const userInfoNew = userById ?? userByUsername;

//   const refreshUser = () => {
//     if (userId) {
//       queryClient.invalidateQueries({
//         queryKey: ["user-by-id", userId],
//       });
//     }

//     if (username) {
//       queryClient.invalidateQueries({
//         queryKey: ["user-profile", username],
//       });
//     }
//   };


//   useEffect(() => {
//     const handler = () => refreshUser();

//     window.addEventListener("follow-updated", handler);

//     return () => {
//       window.removeEventListener("follow-updated", handler);
//     };
//   }, [userId, username]);

//   return (
//     <LayoutProfile>
//       <ProfileContainer
//         user1={userInfoNew ?? user}
//         onEditClick={() => {
//           setIsEditOpen(true);
//           console.log("OPEN EDIT MODAL");
//         }}
//       />

//       <MainProfile user={userInfoNew ?? user} />

//       {isEditOpen && (
//         <>
//           {console.log("isEditOpen TRUE")}
//           <EditProfile
//             user={user}
//             onClose={() => setIsEditOpen(false)}
//           />
//         </>
//       )}
//     </LayoutProfile>
//   );
// }
// export default DashboardProfile;

import Navbar from "../components/Navbar";
import ProfileContainer from "../components/ProfileContainer";
import Profile from "../components/profile";
import RecommendedUsers from "../components/recommendedusers";
import Likes_Posts_Profile from "../components/Likes&PostsProfile";

import { useAuth } from "../context/authContext";

import layoutProfile from "../components/layoutProfile";

import MainProfile from "../components/MainProfile";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";

import EditProfile from "../components/EditProfile";
import LayoutProfile from "../components/layoutProfile";


function DashboardProfile() {
  const { user } = useAuth();
  const { username } = useParams();
  const location = useLocation();
  const [userInfoNew, setUserInfoNew] = useState(null);
  const userId = location.state?.id;



  // console.log("user",userId)

  const [isEditOpen, setIsEditOpen] = useState(false);

  const refreshUser = async () => {
    try {
      const res = await authService.getUserById(userId);
      setUserInfoNew(res.data.data);
    } catch (err) {
      console.error("Failed to refresh user", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUser(username);
        setUserInfoNew(res.data.data);
        console.log("goshti:", res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authService.getUser(userId);
        console.log("Fetched user by ID:", res.data.data);
        setUserInfoNew(res.data.data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    if (userId) fetchData();

  }, [userId]);
    //  useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await authService.getUser(userId);
  //       console.log("Fetched user by ID:", res.data.data);
  //       setUserInfoNew(res.data.data);
  //     } catch (err) {
  //       console.error("Failed to fetch user", err);
  //     }
  //   };

  //   if (userId) fetchData();
  // }, [userId]);

  useEffect(() => {
    const handler = () => refreshUser();
    window.addEventListener("follow-updated", handler);
    return () => window.removeEventListener("follow-updated", handler);
  }, []);

  return (

    <LayoutProfile>

      <ProfileContainer
        user1={userInfoNew ?? user}
        onEditClick={() => {
          setIsEditOpen(true);
          console.log("OPEN EDIT MODAL");
        }}
      />
      <MainProfile user={userInfoNew ?? user} />
      {isEditOpen && (
        <>
          {console.log("isEditOpen TRUE")}
          <EditProfile user={user} onClose={() => setIsEditOpen(false)} />
        </>
      )}
    </LayoutProfile>

    // <div>
    //   <Navbar />

    //   <div className="flex flex-row gap-6 pt-5 dark:bg-[#0A0A0A]">
    //     <Profile />
    //     <div className="flex flex-col">
    //       <ProfileContainer
    //         user1={userInfoNew ?? user}
    //         onEditClick={() => {
    //           setIsEditOpen(true);
    //           console.log("OPEN EDIT MODAL");
    //         }}
    //       />
    //       <MainProfile user={userInfoNew ?? user} />
    //     </div>
    //   </div>
    //   {isEditOpen && (
    //     <>
    //       {console.log("isEditOpen TRUE")}
    //       <EditProfile user={user} onClose={() => setIsEditOpen(false)} />
    //     </>
    //   )}
    // </div>

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await authService.getUserById(userId);
    //       console.log("Fetched user by ID:", res.data.data);
    //       setUserInfoNew(res.data.data);
    //     } catch (err) {
    //       console.error("Failed to fetch user", err);
    //     }
    //   };

    //   if (userId) fetchData();
    // }, [userId]);
  );

  //   <LayoutProfile>
  //     <ProfileContainer user={userInfoNew ?? user} />
  //     <MainProfile user={userInfoNew ?? user} />
  //   </LayoutProfile>
  // );
}

export default DashboardProfile;
