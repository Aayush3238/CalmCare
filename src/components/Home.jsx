import React from "react";

const Home = () => {
  const handleFileUpload = (e) => {
    alert("Analyzing report...");
  };

  return (
    <div className="p-8 bg-[#F6F8FB] min-h-screen">
      
      {/* HEADER */}
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-800">
          Welcome back, <span className="text-[#2C5FAD]">Aayush</span>
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Everything looks stable today 👍
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* UPLOAD */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-800 mb-3">
              Upload New Report
            </h3>

            <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-[#2C5FAD] transition cursor-pointer">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
              />
              <p className="text-sm text-slate-500">
                Drag & drop or click to upload
              </p>
              <p className="text-xs text-slate-400 mt-2">
                PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between hover:pl-2 transition">
                <span>CBC Report analyzed</span>
                <span className="text-slate-400">Feb 12</span>
              </div>

              <div className="flex justify-between hover:pl-2 transition">
                <span>Lipid test uploaded</span>
                <span className="text-slate-400">Jan 28</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* HEALTH CARD */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <p className="text-xs text-slate-400 uppercase mb-1">
              Blood Glucose
            </p>
            <h3 className="text-2xl font-bold text-slate-800">94</h3>
            <p className="text-emerald-500 text-sm">Normal</p>
          </div>

          {/* AI CARD */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
            <p className="text-xs font-semibold text-blue-700 uppercase mb-2">
              Insight
            </p>
            <p className="text-sm text-blue-900">
              Iron levels improved. Keep current diet.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
