import ProfileContainer from "./components/ProfileContainer";
import "./App.css";
import Navbar from "./components/Navbar";
import WelcomeBack from "./components/WelcomeBack";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import RecommendedUsers from "./components/RecommendedUsers";
import NotificationBox from "./components/NotificationBox";
import EditProfile from "./components/EditProfile";
import MainPage from "./pages/MainPage";
import { useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import DashboardHome from "./pages/DashboardHome";
import DashboardNotification from "./pages/DashboardNotification";
import DashboardProfile from "./pages/DashboardProfile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import LoadingScreen from "./components/LoadingScreen";

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
  const { loading } = useAuth();

  if (loading) {
    return <LoadingScreen text="Loading session..." />;
  }
  return (
    <>
      

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ top: 24 }}
        toastOptions={{
          style: {
            background: "black",
            color: "white",
            border: "1px solid #333",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route
            path="/dashboard-notification"
            element={<DashboardNotification />}
          />
          <Route
            path="/dashboard-profile/:username"
            element={<DashboardProfile key={window.location.pathname} />}
          />
          <Route path="/dashboard-profile" element={<DashboardProfile />} />
        </Route>
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
