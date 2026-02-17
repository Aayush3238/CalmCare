import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      setFile(URL.createObjectURL(selected));
    }
  };

  const handleUpload = () => {
    setLoading(true);

    setTimeout(() => {
      const newReport = {
        date: new Date().toLocaleDateString(),
        result: "Hemoglobin slightly low. Increase iron intake.",
      };

      const old = JSON.parse(localStorage.getItem("reports")) || [];
      const updated = [newReport, ...old];
      localStorage.setItem("reports", JSON.stringify(updated));

      setLoading(false);
      alert("Report analyzed & saved ✅");
    }, 2000);
  };

  return (
    <div className="page fade-in">
      <h2>Upload Medical Report</h2>

      <input type="file" accept="application/pdf" onChange={handleFile} />

      {file && (
        <div className="pdf-preview">
          <Document file={file}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}

      <button className="primary-btn" onClick={handleUpload}>
        Analyze Report
      </button>

      {loading && <div className="ai-loader">Analyzing report</div>}
    </div>
  );
};

export default Upload;
