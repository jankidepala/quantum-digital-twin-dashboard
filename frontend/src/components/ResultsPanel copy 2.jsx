export default function ResultsPanel({ result }) {
  return (
    <div className="panel">
      <h2>Results</h2>

      {!result ? (
        <p>Waiting for quantum execution...</p>
      ) : (
        <div>
          <p><b>Status:</b> {result.status}</p>

          <h3>Counts</h3>
          <pre>{JSON.stringify(result.counts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}