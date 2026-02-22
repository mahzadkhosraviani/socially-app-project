import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Profile from "./components/profile";
function App() {


  return (
     <>
    <Routes>
     <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </>

     
   // <Routes>
     // <Route path="/" element={<Profile />} />
    // </Routes>
   
  )
}

export default App
