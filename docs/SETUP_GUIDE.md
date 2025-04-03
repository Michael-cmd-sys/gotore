# Gotore Development Setup Guide

This guide provides step-by-step instructions for setting up the development environment for Gotore.

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js (v18 or higher)
- Go (v1.20 or higher)
- Git
- pnpm (package manager)

## Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/Michael-cmd-sys/gotore.git
cd gotore
```

2. Install backend dependencies:
```bash
cd backend
go mod tidy
cd ..
```

3. Install frontend dependencies:
```bash
cd frontend
pnpm install
cd ..
```

## Development Environment

### Starting the Development Servers

Run the development script to start both frontend and backend servers:
```bash
./dev.sh
```

This will:
- Start the frontend server on http://localhost:5173
- Start the backend server on http://localhost:8080
- Set up the API proxy
- Enable hot reloading for both servers

### API Proxy

The development environment includes an API proxy that forwards requests from the frontend to the backend:

- Frontend requests to `/api/*` are proxied to `http://localhost:8080/*`
- CORS is automatically handled
- No manual configuration needed

## Backend Development

### Hot Reloading

The backend uses Air for hot reloading. Any changes to Go files will automatically:
- Rebuild the application
- Restart the server
- Preserve state where possible

### Health Check

The backend includes a health check endpoint available at:
- Frontend: http://localhost:5173/api/health
- Backend: http://localhost:8080/health

### Test Endpoint

A test endpoint is available for verifying the proxy:
- Frontend: http://localhost:5173/api/test
- Backend: http://localhost:8080/test

## Frontend Development

### Available Scripts

In the frontend directory, you can run:

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
```

### API Client

The frontend includes a reusable API client located at `src/api/client.ts`. It provides methods for:
- Health check
- Test endpoint
- Additional endpoints to be added

### Theme and Styling

The application uses Tailwind CSS for styling. Configuration files are located in:
- `tailwind.config.js`
- `postcss.config.js`
- `src/tailwind.css`

## Troubleshooting

### Common Issues

1. **Proxy Not Working**
   - Ensure both servers are running
   - Check the proxy configuration in `frontend/vite.config.ts`
   - Verify the backend is running on the correct port (8080)

2. **Hot Reloading Not Working**
   - Check if Air is running in the backend directory
   - Verify file permissions in the backend directory
   - Ensure no other process is using port 8080

3. **Build Errors**
   - Clear the pnpm cache: `pnpm store prune`
   - Remove `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
   - Check TypeScript configuration in `tsconfig.app.json`

## Development Best Practices

1. **Commit Messages**
   - Use conventional commits format
   - Include scope in parentheses (e.g., `feat(backend)`, `fix(frontend)`)
   - Write clear, descriptive messages

2. **Code Style**
   - Follow TypeScript best practices
   - Use consistent naming conventions
   - Implement proper error handling

3. **Testing**
   - Write unit tests for new features
   - Test API endpoints through the proxy
   - Verify state management
