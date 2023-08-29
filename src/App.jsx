import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import PublishRide from "./pages/PublishRideLayout";
import ChatBox from "./pages/ChatBox";
import Signinpage from "./pages/Signinpage";
import Login from "./pages/Login";
import PublishRideLayout from "./pages/PublishRideLayout";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<Signinpage />} />
        <Route path="publish-a-ride" element={<PublishRideLayout />} />
        <Route path="chatbox" element={<ChatBox />} />
        <Route path="login" element={<Login />} />
        <Route path="registerform" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
