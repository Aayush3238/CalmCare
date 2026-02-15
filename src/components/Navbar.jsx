import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    `text-sm transition ${
      isActive
        ? "text-[#2C5FAD] font-semibold"
        : "text-slate-600 hover:text-[#2C5FAD]"
    }`;

  return (
    <div className="bg-white/70 backdrop-blur-xl px-8 py-4 flex justify-between items-center border-b sticky top-0 z-50">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="h-8 w-8" />
        <h1 className="font-semibold text-slate-800">CalmCare</h1>
      </div>

      {/* LINKS */}
      <div className="flex gap-6">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/myreports" className={linkStyle}>Reports</NavLink>
        <NavLink to="/familyaccess" className={linkStyle}>Family</NavLink>
        <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="bg-[#2C5FAD] hover:bg-[#1e4a8a] text-white px-5 py-2 rounded-xl text-sm shadow-md transition"
      >
        Upload
      </button>
    </div>
  );
};

export default Navbar;
