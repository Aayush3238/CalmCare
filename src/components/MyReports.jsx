import React from "react";
import { motion } from "framer-motion";

const MyReports = () => {
  const reports = [
    { name: "Full Body Checkup", status: "Healthy" },
    { name: "Thyroid Profile", status: "Attention" },
  ];

  return (
    <motion.div
      className="p-8 bg-[#F6F8FB] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">
        My Reports
      </h2>

      <div className="space-y-4">
        {reports.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{r.name}</h3>
              <p className="text-xs text-slate-400">Feb 2026</p>
            </div>
            <span className="text-sm text-slate-500">{r.status}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyReports;
