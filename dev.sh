#!/bin/bash

# Add pnpm to PATH
export PATH=$PATH:$(npm config get prefix)/bin

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "Installing pnpm..."
    curl -fsSL https://get.pnpm.io/install.sh | sh -
    # Reload shell to ensure pnpm is available
    exec $SHELL
fi

# Install dependencies if not installed
echo "Installing dependencies..."
cd frontend
pnpm install
cd ../backend
go mod tidy
cd ..

# Create bin directory for backend
echo "Setting up backend..."
if [ ! -d "backend/bin" ]; then
    mkdir -p backend/bin
fi

# Generate Tailwind CSS
if [ ! -f "frontend/src/tailwind.css" ]; then
    echo "Generating Tailwind CSS..."
    cd frontend
    pnpm tailwindcss init -p
    echo "@tailwind base;\n@tailwind components;\n@tailwind utilities;" > src/tailwind.css
    cd ..
fi

# Start both servers with color-coded output
echo "Starting development servers..."
pnpm -C frontend dev &

# Wait a bit for the frontend server to start
echo "Waiting for frontend server to start..."
sleep 2

echo "Starting backend server..."
cd backend && air
