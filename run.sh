#!/bin/bash

echo "⚛️ Starting Quantum Digital Twin Dashboard..."

# -----------------------
# Backend
# -----------------------
cd backend

python3 -m venv venv 2>/dev/null
source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload &
BACKEND_PID=$!

cd ..

# -----------------------
# Frontend
# -----------------------
cd frontend

npm install
npm run dev &
FRONTEND_PID=$!

cd ..

# -----------------------
# Wait for frontend to start
# -----------------------
echo "⏳ Waiting for frontend to start..."

sleep 5

# -----------------------
# Auto-open browser (MAC)
# -----------------------
open http://localhost:5173

# -----------------------
# Info
# -----------------------
echo "----------------------------------"
echo "Frontend: http://localhost:5173"
echo "Backend : http://127.0.0.1:8000"
echo "----------------------------------"

# Keep processes alive
wait $BACKEND_PID $FRONTEND_PID