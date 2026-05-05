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

  console.log("EditProfile =", EditProfile);

  // console.log("user",userId)

  const [isEditOpen, setIsEditOpen] = useState(false);
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
  //    useEffect(() => {
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

    )
}

export default DashboardProfile;
