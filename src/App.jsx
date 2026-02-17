import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import FamilyMembers from "./components/FamilyMembers";
import MyReports from "./components/MyReports";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Upload from "./components/Upload";

function App() {
  return (
      <div className="app-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myreports" element={<MyReports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/familyaccess" element={<FamilyMembers />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
  );
}

export default App;
