<<<<<<< HEAD
export default function Dashboard({ data }) {
=======
<<<<<<< HEAD
import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  const runCircuit = async () => {
    const res = await axios.get("http://localhost:8000/run-circuit");
    setResult(res.data.result);
  };

>>>>>>> d200e5d (overwrite repo)
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
<<<<<<< HEAD
}
=======
}
=======
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
>>>>>>> a733754 (Initial quantum dashboard (frontend + backend))
>>>>>>> d200e5d (overwrite repo)
