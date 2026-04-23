export async function getQuantumResult() {
  const res = await fetch("http://127.0.0.1:8000/api/run");

  if (!res.ok) {
    throw new Error("Backend request failed");
  }

  return res.json();
}