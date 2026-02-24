import RecommendedUsers from "./components/recommendedusers";
import ProfileContainer from "./components/ProfileContainer";
import "./App.css";
import Navbar from "./components/Navbar";
import WelcomeBack from "./components/WelcomeBack";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Profile from "./components/profile";
function App() {
  return (
    // <Routes>
    // <Route path="/" element={<Profile />} />
    // </Routes>

    <>
      <div className="dark:bg-black w-screen h-screen">
        <Navbar />
        <WelcomeBack />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
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
      </div>
    </>
  );
}

export default App;
