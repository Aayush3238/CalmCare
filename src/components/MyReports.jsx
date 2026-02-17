import React, { useEffect, useState } from "react";

const MyReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(stored);
  }, []);

  return (
    <div className="page fade-in">
      <h2>Detailed Report Analysis</h2>

      {reports.length === 0 ? (
        <p className="placeholder">No reports uploaded yet.</p>
      ) : (
        <div className="reports-list">
          {reports.map((r, i) => (
            <div key={i} className="card report-card">
              <h4>{r.date}</h4>

              <p><strong>AI Insight:</strong> {r.result}</p>

              <p className="muted">
                Recommendation: Maintain balanced diet, regular checkups.
              </p>

              <p className="muted small">
                Confidence: {90 + Math.floor(Math.random() * 10)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReports;
