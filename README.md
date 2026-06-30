# ⚛️ Quantum Digital Twin Dashboard

A production-grade, full-stack quantum simulation platform combining **FastAPI**, **Qiskit v2**, **React**, and a **Digital Twin** architecture for real-time quantum system monitoring and simulation.

## 🚀 Features

✅ **Modern Qiskit v2 Integration** - Uses StatevectorSampler Primitives (replaces deprecated Aer)  
✅ **FastAPI Backend** - High-performance async API with CORS support  
✅ **React Dashboard** - Modern UI with 3D visualization (Three.js)  
✅ **Digital Twin Model** - Mirrors physical quantum hardware constraints  
✅ **Noise Simulation** - T1/T2 relaxation and hardware error modeling  
✅ **Docker Support** - Ready for containerized deployment  
✅ **Educational Notebooks** - Comprehensive Qiskit v2 tutorials  

## 📁 Project Structure

```
quantum-digital-twin-dashboard/
│
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI application entry
│   │   ├── api/
│   │   │   ├── routes.py            # API endpoints
│   │   │   ├── qiskit_runner.py     # Qiskit v2 execution (StatevectorSampler)
│   │   │   └── digital_twin.py      # System state and metrics
│   │   ├── core/
│   │   │   ├── noise_model.py       # Hardware noise configuration
│   │   │   ├── system_model.py      # Quantum system model
│   │   │   └── calibration.py       # Device calibration data
│   │   └── utils/
│   │       └── logger.py            # Logging utilities
│   ├── requirements.txt
│   ├── main.py                      # Entry point
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Dashboard.jsx        # Main dashboard with 3D visualization
│   │   ├── api/
│   │   │   └── api.js               # Backend API client
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
│
├── notebooks/
│   ├── 01_qubit_basics.ipynb        # Qiskit v2 fundamentals
│   ├── 02_noise_modeling.ipynb      # Noise simulation
│   └── 03_digital_twin_core.ipynb   # Digital twin concepts
│
├── docker-compose.yml               # Multi-container orchestration
└── README.md
```

## 🛠️ Installation & Setup

### Option 1: Local Development

#### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
# Backend runs on http://127.0.0.1:8000
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

### Option 2: Docker (Recommended for Production)

```bash
docker-compose up --build
# Backend:  http://localhost:8000
# Frontend: http://localhost:5173
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/qiskit` | Execute a basic quantum circuit |
| `GET` | `/api/digital-twin` | Get system state and hardware metrics |
| `GET` | `/health` | Health check |

## 🧠 Architecture

### Backend (FastAPI + Qiskit v2)

- **Qiskit v2 Primitives**: Uses modern `StatevectorSampler`
- **CORS Middleware**: Enables cross-origin requests from React
- **Modular Structure**: Separation of concerns
- **Noise Modeling**: Realistic hardware simulation

### Frontend (React + Vite + Three.js)

- **Dashboard Component**: Real-time quantum system with 3D visualization
- **3D Qubit System**: Interactive 5-qubit system visualization
- **API Integration**: Async fetch calls to backend
- **Responsive Design**: Works on desktop and tablet

## 🚀 Quick Start

1. **Clone & Install**
   ```bash
   git clone <repo>
   cd quantum-digital-twin-dashboard
   cd backend && pip install -r requirements.txt && cd ..
   cd frontend && npm install && cd ..
   ```

2. **Run Backend**
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   uvicorn app.main:app --reload
   ```

3. **Run Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```

4. **Open Browser**
   - Navigate to http://localhost:5173

## 📊 Dashboard Features

- **3D Quantum Visualization**: Interactive rendering of 5-qubit system
- **Hardware Metrics**: Real-time system state and calibration data
- **Quantum Results**: Circuit execution counts and statistics
- **Auto-rotating**: 3D scene rotates automatically with mouse control

## 📝 License

MIT

---

**Made with ⚛️ for quantum computing enthusiasts**
<<<<<<< HEAD

=======
# Quantum Digital Twin Dashboard

>>>>>>> a733754 (Initial quantum dashboard (frontend + backend))
Full-stack quantum simulation system using:
- FastAPI
- Qiskit
- React
- Digital Twin architecture
>>>>>>> d200e5d (overwrite repo)

This project demonstrates how quantum systems behave under:
- ideal simulation
- noisy environments
- hardware-aware constraints (digital twin modeling)

---

# 🚀 What This Project Does

- Runs quantum circuits (Qiskit)
- Simulates noise (T1 / T2 decoherence)
- Provides a digital twin model of a quantum system
- Displays results in a React dashboard
- Exposes a FastAPI backend API
- Optional IBM Quantum hardware execution support

---

# 🧠 Core Idea

Instead of treating quantum computing as pure math, this project models it as a **real physical system**:

- Qubits decay over time (T1 / T2)
- Gates introduce noise
- Hardware behaves differently from simulation
- Results depend on physical constraints

---

# 🏗️ Architecture

```

React Frontend
↓
FastAPI Backend
↓
Qiskit Engine
↓
┌─────────────────────────┐
│ Simulator / IBM Backend │
└─────────────────────────┘

```

---

# 📁 Project Structure

```

quantum-digital-twin/
│
├── backend/
│   ├── main.py
│   ├── qiskit_engine.py
│   ├── noise_model.py
│   ├── calibration.py
│   └── digital_twin.py
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── components/
│   │       ├── Dashboard.jsx
│   │       └── CalibrationPanel.jsx
│
├── notebooks/
│   ├── noise_simulation.ipynb
│   ├── digital_twin.ipynb
│   └── calibration_analysis.ipynb
│
├── requirements.txt
├── package.json
└── README.md

````

---

# ⚙️ Backend (FastAPI + Qiskit)

### ▶ Run quantum circuit
```python
from qiskit import QuantumCircuit, Aer, execute

def run_circuit():
    qc = QuantumCircuit(1, 1)
    qc.h(0)
    qc.measure(0, 0)

    backend = Aer.get_backend("qasm_simulator")
    result = execute(qc, backend, shots=1024).result()

    return result.get_counts()
````

---

### ▶ Digital Twin Model

```python
def simulate_system():
    return {
        "qubit_coherence": "T1=120us, T2=90us",
        "noise_level": "medium",
        "system_state": "stable but degrading under scale"
    }
```

---

# 🎨 Frontend (React Dashboard)

### ▶ Main UI

```jsx
import React, { useEffect, useState } from "react";
import { fetchDigitalTwin } from "./api";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDigitalTwin().then(setData);
  }, []);

  return (
    <div>
      <h1>Quantum Digital Twin Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

---

### ▶ API Call

```javascript
export async function fetchDigitalTwin() {
  const res = await fetch("http://localhost:8000/digital-twin");
  return res.json();
}
```

---

# 📊 Key Features

### ⚛ Quantum Execution

* Qiskit-based circuit simulation
* Measurement result generation

### 🌐 Full Stack System

* React UI
* FastAPI backend
* JSON-based communication

### 🌡 Digital Twin Modeling

* Noise simulation (T1/T2)
* Hardware behavior approximation

### ☁ Optional IBM Integration

* Run circuits on real quantum hardware
* Compare simulator vs real output

---

# ▶ How to Run

## 1. Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

## 2. Frontend

```bash
cd frontend
npm install
npm run dev
<<<<<<< HEAD
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🧠 What This Project Demonstrates

This is not just a demo app.

It shows:

* Understanding of quantum noise models
* Ability to build simulation + hardware abstraction
* Full-stack engineering capability
* System-level thinking (not just circuits)
* Integration of physics + software systems

---

# 💼 Skills Demonstrated

* Quantum computing (Qiskit)
* Noise modeling (T1 / T2)
* FastAPI backend engineering
* React frontend development
* System architecture design
* Digital twin modeling concepts

---

# 🚀 Future Improvements

* Real-time IBM Quantum execution streaming
* 3D Bloch sphere visualization
* Circuit builder UI (drag & drop)
* Advanced noise calibration system
* Cloud deployment (Vercel + Render)

---

# ⚠️ Note

This project focuses on **engineering understanding of quantum systems**, not theoretical physics research.

---

# 👨‍💻 Author

Built as a Quantum Engineering Portfolio Project demonstrating:

* Quantum software systems
* Hardware-aware simulation thinking
* Full-stack quantum application design

👉 **or :contentReference[oaicite:2]{index=2}**
```
=======
<<<<<<< HEAD
=======
>>>>>>> b8d24da (Initial Quantum Digital Twin Dashboard)
>>>>>>> a733754 (Initial quantum dashboard (frontend + backend))
>>>>>>> d200e5d (overwrite repo)
