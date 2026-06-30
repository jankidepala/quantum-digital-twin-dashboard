# backend/qiskit_engine.py
from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

def run_qiskit_circuit():
    qc = QuantumCircuit(1)
    qc.h(0)
    qc.measure_all()

    sampler = StatevectorSampler()
    job = sampler.run([(qc,)])
    result = job.result()[0]

    # This is the correct place for this return statement
    return result.data.meas.get_counts()