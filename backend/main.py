from fastapi import FastAPI
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

app = FastAPI()

@app.get("/api/run")
def run_circuit():
    qc = QuantumCircuit(1, 1)
    qc.h(0)
    qc.measure(0, 0)

    sim = AerSimulator()
    result = sim.run(qc, shots=1024).result()

    return result.get_counts()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)