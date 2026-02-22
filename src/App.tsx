<<<<<<< HEAD
import RecommendedUsers from "./components/recommendedusers";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black p-6">
      <RecommendedUsers />
    </div>
  );
=======
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
      </div>
    </>
  ); 
>>>>>>> dev
}

export default App;
