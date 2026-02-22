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
}

export default App;
