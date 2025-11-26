"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Pilih file dulu");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    const res = await fetch("http://localhost:3001/api/extract-book-details", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Upload Book Image / Document</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept="image/*,.pdf"
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload"}
      </button>

      {result && (
        <pre style={{ marginTop: 20 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
