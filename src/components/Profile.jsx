import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <motion.div
      className="p-8 min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EEF4FF]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-xl bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-lg">

        <div className="flex items-center gap-2 mb-6">
          <User className="text-[#2C5FAD]" />
          <h2 className="text-xl font-bold text-slate-800">
            Profile
          </h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-xs text-slate-400">Full Name</label>
            <input
              className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-[#2C5FAD]"
              defaultValue="Aayush Kumar"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400">Blood Group</label>
            <input
              className="w-full mt-1 p-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-[#2C5FAD]"
              defaultValue="O+"
            />
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-[#2C5FAD] hover:bg-[#1e4a8a] text-white py-3 rounded-xl font-semibold shadow-md transition"
        >
          Save Changes
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Profile;
