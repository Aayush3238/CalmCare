import React from "react";
import { motion } from "framer-motion";
import { UploadCloud, Activity, Sparkles } from "lucide-react";

const Home = () => {

  const handleFileUpload = () => {
    alert("Analyzing report...");
  };

  return (
    <div className="relative p-8 min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#EEF4FF] to-[#E0F2FE] overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome back, <span className="text-[#2C5FAD]">Aayush</span>
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Everything looks stable today 👍
        </p>
      </motion.header>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* UPLOAD */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <UploadCloud size={20} className="text-[#2C5FAD]" />
              <h3 className="font-semibold text-slate-800">
                Upload Report
              </h3>
            </div>

            <div 
              onClick={handleFileUpload}
              className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer hover:border-[#2C5FAD] transition"
            >
              <p className="text-sm text-slate-500">
                Drag & drop or click to upload
              </p>
              <p className="text-xs text-slate-400 mt-2">
                PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
          </motion.div>

          {/* ACTIVITY */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity size={18} />
              <h3 className="font-semibold text-slate-800">
                Recent Activity
              </h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between hover:translate-x-1 transition">
                <span>CBC Report analyzed</span>
                <span className="text-slate-400">Feb 12</span>
              </div>
              <div className="flex justify-between hover:translate-x-1 transition">
                <span>Lipid test uploaded</span>
                <span className="text-slate-400">Jan 28</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* HEALTH CARD */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl"
          >
            <p className="text-xs text-slate-400 uppercase mb-1">
              Blood Glucose
            </p>
            <h3 className="text-3xl font-bold text-slate-800">94</h3>
            <p className="text-emerald-500 text-sm">Normal</p>
          </motion.div>

          {/* AI INSIGHT */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 shadow-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} />
              <p className="text-xs font-semibold uppercase text-blue-700">
                AI Insight
              </p>
            </div>
            <p className="text-sm text-blue-900">
              Iron levels improved. Keep current diet.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
