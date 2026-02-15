import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from './components/Navbar';
import MyReports from './components/MyReports';
import FamilyMembers from './components/FamilyMembers';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <Navbar/>
      <Routes>
        <Route path = "/" element= {<Home/>}></Route>
        <Route path ="/myReports" element = {<MyReports/>}></Route>
        <Route path = "/profile" element = {<Profile/>}></Route>
        <Route path = "/familyAccess" element = {<FamilyMembers/>}></Route>
      </Routes>
    </div>
  )
}

export default App
