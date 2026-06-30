// frontend/src/App.jsx
import { useState } from "react";
import { getQuantumResult } from "./api";
import ControlPanel from "./components/ControlPanel";
import Dashboard from "./components/Dashboard"; // Use the component you already have

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runQuantum = async () => {
    setLoading(true);
    try {
      const data = await getQuantumResult();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>⚛️ Quantum Dashboard</h1>
      <ControlPanel onRun={runQuantum} />
      
      {/* Pass the data and loading state to your Dashboard component */}
      <Dashboard data={result} loading={loading} />
    </div>
  );
}