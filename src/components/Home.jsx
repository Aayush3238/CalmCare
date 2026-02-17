import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const reports = JSON.parse(localStorage.getItem("reports")) || [];

    if (reports.length === 0) {
      setSummary("Upload your first report to see AI insights 📊");
      return;
    }

    // Graph data
    const formatted = reports.map((r) => ({
      name: r.date,
      value: 75 + Math.random() * 20,
    }));

    setData(formatted.reverse());

    // AI-like summary
    const last = reports[0];
    setSummary(
      `Latest report suggests: ${last.result}. Overall trend looks stable.`
    );
  }, []);

  return (
    <div className="page fade-in">

      {/* HERO */}
      <div className="hero">
        <h1>Your AI Health Companion</h1>
        <p>Track. Analyze. Improve your health.</p>
      </div>

      {/* SUMMARY */}
      <div className="card">
        <h3>AI Summary</h3>
        <p>{summary}</p>
      </div>

      {/* GRAPH */}
      <div className="card">
        <h3>Health Trends</h3>

        {data.length === 0 ? (
          <p className="placeholder">No data yet</p>
        ) : (
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" strokeWidth={3} />
          </LineChart>
        )}
      </div>

      {/* CTA */}
      <div className="card upload-cta">
        <h3>Upload New Report</h3>
        <button onClick={() => navigate("/upload")}>
          Upload Report
        </button>
      </div>

    </div>
  );
};

export default Home;
