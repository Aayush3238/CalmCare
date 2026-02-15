import React from "react";
import { motion } from "framer-motion";

const FamilyMembers = () => {
  const members = [
    { name: "Aayush", relation: "You" },
    { name: "Aryan", relation: "Brother" },
    { name: "Yash", relation: "Mother" },
  ];

  return (
    <motion.div
      className="p-8 bg-[#F6F8FB] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">
        Family Members
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#2C5FAD]">
                {m.name[0]}
              </div>
              <div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-xs text-slate-400">{m.relation}</p>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center border-2 border-dashed rounded-2xl text-slate-400 cursor-pointer"
        >
          + Add Member
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FamilyMembers;
