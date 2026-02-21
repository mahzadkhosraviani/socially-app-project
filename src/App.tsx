import "./App.css";
import Navbar from "./components/Navbar";
import WelcomeBack from "./components/WelcomeBack";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <div className="dark:bg-black w-screen h-screen">
        <Navbar />
        <WelcomeBack />
        {/* <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
