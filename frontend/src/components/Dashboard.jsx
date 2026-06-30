// frontend/src/components/Dashboard.jsx
export default function Dashboard({ data, loading }) {
  if (loading) {
    return <p>Loading quantum simulation...</p>;
  }

  return (
    <div>
      <h2>Results</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Click "Run" to start simulation.</p>
      )}
    </div>
  );
}