
import ProfileContainer from "./components/ProfileContainer";

import "./App.css";
import Navbar from "./components/Navbar";
import WelcomeBack from "./components/WelcomeBack";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreatePost from "./components/createPost";
import PostCard from "./components/postCard";
import RecommendedUsers from "./components/recommendedusers";
import NotificationBox from "./components/Notificationbox";
import EditProfile from "./components/EditProfile";
import MainPage from "./pages/MainPage";

import DashboardHome from "./pages/DashboardHome";
import DashboardNotification from "./pages/DashboardNotification";
import DashboardProfile from "./pages/DashboardProfile";

// import Profile from "./components/profile";

    // <Routes>
    // <Route path="/" element={<Profile />} />
    // </Routes>


// import Delete from "./components/delete";
// function App() {
//   return (
 
    
     
   // <Routes>
     // <Route path="/" element={<Profile />} />
    // </Routes>
   
  //     <Routes>
  //     <Route path="/delete" element={<Delete />} />
  //   </Routes>
  // );
  
  



// <Routes>
// <Route path="/" element={<Profile />} />
// </Routes>

function App() {
  return (

    <>
    
   
      {/* <div className="dark:bg-black w-screen h-screen">
        <Navbar />
        <WelcomeBack /> */}
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="/dashboard-notification" element={<DashboardNotification />} />
          <Route path="/dashboard-profile" element={<DashboardProfile />} />
        </Routes>
        {/* <CreatePost />
        <PostCard />
        <RecommendedUsers /> */}
      {/* </div> */}


        {/* </Routes>{" "}
        <div className="min-h-screen bg-gray-100 dark:bg-black p-6">
          <RecommendedUsers />
        </div> */}
        {/* <ProfileContainer
          name="amirali"
          username="amirali"
          avatar="/profilephoto.svg"
          followings={3}
          followers={3}
          posts={0}
          location="No location"
          website=""
          createdAt="7 days ago"
        /> */}

       

    </>
  );
}

export default App;
