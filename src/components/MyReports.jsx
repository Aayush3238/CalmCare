import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const FamilyMembers = () => {
  const members = [
    { name: "Aayush", relation: "You" },
    { name: "Aryan", relation: "Brother" },
    { name: "Yash", relation: "Mother" },
  ];

  return (
    <motion.div
      className="p-8 min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EEF4FF]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Users className="text-[#2C5FAD]" />
        <h2 className="text-2xl font-bold text-slate-800">
          Family Members
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#2C5FAD]">
                {m.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{m.name}</h3>
                <p className="text-xs text-slate-400">{m.relation}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ADD MEMBER */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center border-2 border-dashed rounded-2xl text-slate-400 cursor-pointer h-[120px] hover:border-[#2C5FAD] hover:text-[#2C5FAD] transition"
        >
          + Add Member
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FamilyMembers;
