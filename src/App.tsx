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
        </Routes>
        <NotificationBox/>
        </Routes> */}
        {/* <CreatePost />
        <PostCard />
        <RecommendedUsers /> */}
      </div>
    </>
  );
}

export default App;
