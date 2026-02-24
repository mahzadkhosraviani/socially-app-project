<<<<<<< HEAD
import RecommendedUsers from "./components/recommendedusers";
import ProfileContainer from "./components/ProfileContainer";
=======
>>>>>>> dev
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
// import Profile from "./components/profile";
<<<<<<< HEAD
function App() {
  return (
    // <Routes>
    // <Route path="/" element={<Profile />} />
    // </Routes>
=======

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
  
  
>>>>>>> dev


// <Routes>
// <Route path="/" element={<Profile />} />
// </Routes>

function App() {
  return (

    <>
    
   
      <div className="dark:bg-black w-screen h-screen">
        <Navbar />
        <WelcomeBack />
        {/* <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
<<<<<<< HEAD
        </Routes>{" "}
        <div className="min-h-screen bg-gray-100 dark:bg-black p-6">
          <RecommendedUsers />
        </div>
        <ProfileContainer
          name="amirali"
          username="amirali"
          avatar="/profilephoto.svg"
          followings={3}
          followers={3}
          posts={0}
          location="No location"
          website=""
          createdAt="7 days ago"
        />
=======
        </Routes>
        <NotificationBox/>
        </Routes> */}
        {/* <CreatePost />
        <PostCard />
        <RecommendedUsers /> */}
>>>>>>> dev
      </div>
    </>
  );
}

export default App;
