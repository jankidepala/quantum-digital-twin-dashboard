export default function ControlPanel({ onRun }) {
  return (
    <div className="panel">
      <h2>Control Panel</h2>

      <button onClick={onRun}>
        ▶ Run Quantum Circuit
      </button>
    </div>
  );
}