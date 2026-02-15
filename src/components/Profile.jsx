import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className="p-8 bg-[#F6F8FB] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-xl bg-white p-8 rounded-2xl border border-slate-100">
        <h2 className="text-xl font-semibold mb-6">Profile</h2>

        <div className="space-y-4">
          <input className="w-full p-2 border rounded-lg" defaultValue="Aayush Kumar" />
          <input className="w-full p-2 border rounded-lg" defaultValue="O+" />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-[#2C5FAD] text-white py-2 rounded-lg"
        >
          Save
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Profile;
