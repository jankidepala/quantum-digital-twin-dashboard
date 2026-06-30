// frontend/src/api.js
export async function getQuantumResult() {
  // Ensure this matches the route defined in your FastAPI app (e.g., /api/run)
  const res = await fetch("http://127.0.0.1:8000/api/run", {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.status}`);
  }

  return res.json();
}