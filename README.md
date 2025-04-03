# Gotore - Reboot your mood, recharge your desk

Gotore is a specialized e-commerce platform designed for developers and technical professionals. We understand the daily grind of coding and the challenges that come with it. That's why we've created a unique space where you can find products that bring joy, nostalgia, and inspiration back into your work life.

## About Gotore

Gotore is more than just another tech store. It's a curated collection of products that help developers:
- Reconnect with their passion for technology
- Find moments of joy in their daily work
- Create a more inspiring workspace
- Rediscover the fun in coding

Our product range includes:
- Nostalgic tech gadgets
- Custom stickers and decals
- Developer-themed apparel
- Fun tech toys and collectibles
- Desk accessories that spark creativity

## Features

- Modern React frontend with TypeScript
- Go backend with Echo framework
- Hot reloading for both frontend and backend
- API proxy for development
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Go (v1.20 or higher)
- Git
- pnpm (package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Michael-cmd-sys/gotore.git
cd gotore
```

2. Install dependencies:
```bash
# Backend dependencies
(cd backend && go mod tidy)

# Frontend dependencies
(cd frontend && pnpm install)
```

### Development

Start both servers with:
```bash
./dev.sh
```

This will:
- Start the frontend server on http://localhost:5173
- Start the backend server on http://localhost:8080
- Set up the API proxy
- Enable hot reloading for both servers

### API Endpoints

- Health Check: `/api/health`
- Test Endpoint: `/api/test`

## Project Structure

```
gotore/
├── backend/           # Go backend application
│   ├── internal/      # Internal packages
│   │   └── config/    # Configuration
│   │   └── handlers/  # API handlers
│   ├── main.go        # Entry point
│   └── go.mod         # Dependencies
├── frontend/          # React frontend
│   ├── src/
│   │   ├── api/      # API client
│   │   ├── components/ # React components
│   │   └── pages/    # Page components
│   └── vite.config.ts # Build configuration
└── docs/             # Documentation
```

## Development Tools

- **Frontend**: Vite with React and TypeScript
- **Backend**: Go with Echo framework
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Hot Reloading**: Air (backend), Vite (frontend)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
