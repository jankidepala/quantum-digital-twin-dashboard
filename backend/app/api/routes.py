# backend/app/api/routes.py
from fastapi import APIRouter
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

router = APIRouter()

@router.get("/run")
def run_circuit():
    # Quantum logic moved here
    qc = QuantumCircuit(1, 1)
    qc.h(0)
    qc.measure(0, 0)

    sim = AerSimulator()
    result = sim.run(qc, shots=1024).result()

    return result.get_counts()