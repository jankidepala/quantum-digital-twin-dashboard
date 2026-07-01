# backend/app/api/routes.py
from fastapi import APIRouter
from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

router = APIRouter()

# The "Master Exam Curriculum"
CURRICULUM = {
    "qubit-prob": {"gates": ["h"], "desc": "Hadamard creates 50/50 probability."},
    "x-gate": {"gates": ["x"], "desc": "Pauli-X flips |0> to |1>."},
    "z-gate": {"gates": ["h", "z", "h"], "desc": "Z-gate flips phase."},
    "entanglement": {"gates": ["h", "cx"], "desc": "Bell state: H on q0 + CX to q1."},
}

@router.get("/learn/{concept}")
def get_concept_circuit(concept: str):
    config = CURRICULUM.get(concept)
    if not config:
        return {"error": "Concept not found"}

    qc = QuantumCircuit(2, 2)
    for gate in config["gates"]:
        if gate == "h": qc.h(0)
        elif gate == "x": qc.x(0)
        elif gate == "z": qc.z(0)
        elif gate == "cx": qc.cx(0, 1)

    qc.measure_all()

    # V2 Execution: Use StatevectorSampler instead of AerSimulator
    sampler = StatevectorSampler()
    
    # Primitives require inputs as Primitive Unified Blocs (PUBs) in a tuple
    job = sampler.run([(qc,)])
    result = job.result()[0]
    
    # Access counts through the hierarchical V2 data structure
    counts = result.data.meas.get_counts()

    return {
        "concept": concept,
        "counts": counts,
        "desc": config["desc"],
    }