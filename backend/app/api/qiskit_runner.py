`from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

def run_qiskit_circuit():
    """
    Run a basic quantum circuit using Qiskit v2 Primitives.
    This replaces the deprecated execute() and Aer methods.
    """
    try:
        # Create a simple quantum circuit
        qc = QuantumCircuit(1)
        qc.h(0)  # Hadamard gate
        qc.measure_all()

        # V2 Execution Standard using Primitives
        sampler = StatevectorSampler()
        
        # Primitives require inputs as tuples (pubs)
        job = sampler.run([(qc,)])
        result = job.result()[0]

        counts = result.data.meas.get_counts()
        
        return {
            "status": "success",
            "counts": counts,
            "circuit": "H-gate + measure"
        }
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }
