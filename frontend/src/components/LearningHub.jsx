import { useState } from "react";

export default function LearningHub() {
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const concepts = [
    { id: "qubit-prob", name: "Qubit Probability" },
    { id: "x-gate", name: "Pauli-X Gate" },
    { id: "z-gate", name: "Pauli-Z Gate" },
    { id: "entanglement", name: "Entanglement (CX)" },
  ];

  const startLesson = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/learn/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to load lesson: ${res.status}`);
      }
      const data = await res.json();
      setLesson(data);
    } catch (err) {
      setError(err.message);
      setLesson(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="panel" style={{ padding: "20px" }}>
      <h2>🎓 IBM C1000-179 Exam Prep</h2>
      <p>Select a concept to review the circuit, expected behavior, and measurement counts.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {concepts.map((concept) => (
          <button
            key={concept.id}
            onClick={() => startLesson(concept.id)}
            style={{ margin: "5px", padding: "10px 14px", cursor: "pointer" }}
          >
            {concept.name}
          </button>
        ))}
      </div>

      {loading && <p>Loading lesson...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {lesson && (
        <div style={{ marginTop: "20px", background: "#4d4747", padding: "14px", borderRadius: "8px" }}>
          <h3>{lesson.concept.toUpperCase()}</h3>
          <p>{lesson.desc}</p>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            Results: {JSON.stringify(lesson.counts, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
