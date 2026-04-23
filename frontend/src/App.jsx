<<<<<<< HEAD
import { useState } from "react";
import { getQuantumResult } from "./api";

import ControlPanel from "./components/ControlPanel";
import ResultsPanel from "./components/ResultsPanel";
import CircuitView from "./components/CircuitView";

export default function App() {
=======
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";

export default function App() {
  return <Dashboard />;
}
=======
import { useState } from "react";
import { getQuantumResult } from "./api";

import ControlPanel from "./components/ControlPanel";
import ResultsPanel from "./components/ResultsPanel";
import CircuitView from "./components/CircuitView";

export default function App() {
>>>>>>> d200e5d (overwrite repo)
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
<<<<<<< HEAD
}
=======
}
>>>>>>> a733754 (Initial quantum dashboard (frontend + backend))
>>>>>>> d200e5d (overwrite repo)
