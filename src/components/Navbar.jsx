import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#2C5FAD] font-semibold"
      : "text-slate-600 hover:text-[#2C5FAD]";

  return (
    <div className="bg-white/80 backdrop-blur-md px-8 py-4 flex justify-between border-b sticky top-0">
      <div className="flex items-center gap-2">
      <h1 className= "font-bold">CalmCare</h1>
  </div>

      <div className="flex gap-6">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/myreports" className={linkStyle}>Reports</NavLink>
        <NavLink to="/familyaccess" className={linkStyle}>Family</NavLink>
        <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-[#2C5FAD] text-white px-4 py-2 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
};

export default Navbar;
