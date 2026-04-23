export default function Dashboard({ data }) {
  return (
    <div>
      <h2>Results</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading quantum simulation...</p>
      )}
    </div>
  );
}