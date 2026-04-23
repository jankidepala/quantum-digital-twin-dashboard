import { useState } from "react";
import { getQuantumResult } from "./api";

import ControlPanel from "./components/ControlPanel";
import ResultsPanel from "./components/ResultsPanel";
import CircuitView from "./components/CircuitView";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runQuantum = async () => {
    try {
      setLoading(true);

      const data = await getQuantumResult();
      setResult(data);

    } catch (err) {
      console.error("Quantum run failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>⚛️ Quantum Dashboard</h1>

      <ControlPanel onRun={runQuantum} />

      {loading && <p>Running quantum circuit...</p>}

      <div className="grid">kk
        <CircuitView />
        <ResultsPanel result={result} />
      </div>
    </div>
  );
}