from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

def run_basic_circuit():
    qc = QuantumCircuit(1, 1)
    qc.h(0)
    qc.measure(0, 0)

    sim = AerSimulator()
    job = sim.run(qc, shots=1000)
    result = job.result()

    return result.get_counts()
