import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  const links = [
    { path: "/", label: "Home" },
    { path: "/myreports", label: "Reports" },
    { path: "/familyaccess", label: "Family" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <div className="navbar">
      <h1 className="logo">CalmCare</h1>

      <div className="nav-links-container">
        {links.map((link) => (
          <NavLink key={link.path} to={link.path} className="nav-item">
            {({ isActive }) => (
              <div className="link-wrapper">
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="active-pill"
                  />
                )}
                <span className={isActive ? "active-text" : ""}>
                  {link.label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>

      {/* FIXED: goes to upload */}
      <button className="upload-btn" onClick={() => navigate("/upload")}>
        Upload
      </button>
    </div>
  );
};

export default Navbar;
