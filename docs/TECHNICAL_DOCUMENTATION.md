# Gotore Technical Documentation

## Project Overview

Gotore is a modern e-commerce platform designed specifically for developers and technical professionals, offering curated products that enhance their workspace and bring joy to their daily work.

## Architecture

### Frontend Architecture

#### Tech Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Framework**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: Axios
- **Routing**: React Router

#### Project Structure
```
frontend/
├── src/
│   ├── api/           # API client and utilities
│   │   ├── client.ts  # Main API client
│   │   └── types.ts   # API response types
│   ├── components/     # Reusable components
│   │   ├── auth/      # Authentication components
│   │   ├── layout/    # Layout components
│   │   └── ui/        # UI primitives
│   ├── pages/         # Page components
│   │   ├── auth/      # Authentication pages
│   │   ├── account/   # Account pages
│   │   ├── products/  # Product pages
│   │   └── community/ # Community pages
│   ├── store/         # State management
│   │   ├── auth.ts    # Authentication state
│   │   ├── cart.ts    # Cart state
│   │   └── products.ts# Product state
│   ├── styles/        # Global styles
│   │   ├── index.css  # Global CSS
│   │   └── theme.ts   # Theme configuration
│   └── utils/         # Utility functions
│       ├── api.ts     # API utilities
│       └── helpers.ts # Helper functions
└── public/            # Static assets
```

### Backend Architecture

#### Tech Stack
- **Language**: Go (Golang)
- **Framework**: Echo
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Caching**: Redis
- **API Documentation**: Swagger/OpenAPI

#### Project Structure
```
backend/
├── cmd/
│   └── server/        # Server entry point
│       └── main.go    # Main application
├── internal/
│   ├── config/        # Configuration
│   │   └── config.go  # Config struct and loading
│   ├── handlers/      # API handlers
│   │   ├── auth.go    # Authentication handlers
│   │   ├── products.go# Product handlers
│   │   └── cart.go    # Cart handlers
│   ├── middleware/    # Middleware functions
│   │   └── auth.go    # Authentication middleware
│   ├── models/        # Data models
│   │   ├── user.go    # User model
│   │   ├── product.go # Product model
│   │   └── order.go   # Order model
│   └── services/      # Business logic
│       ├── auth.go    # Authentication service
│       ├── products.go# Product service
│       └── cart.go    # Cart service
├── pkg/              # Shared packages
│   ├── db/          # Database utilities
│   └── utils/       # Utility functions
└── tmp/             # Temporary files
```

## Technical Requirements

### Frontend

1. **Dependencies**
   - React 18+
   - TypeScript 5+
   - Vite 5+
   - Tailwind CSS 3+
   - Axios 1+
   - Zustand 4+

2. **Build Configuration**
   - Vite for fast development
   - TypeScript for type safety
   - PostCSS for CSS processing
   - ESLint for code quality

3. **State Management**
   - Zustand for global state
   - React Context for UI state
   - Local storage for persistence

### Backend

1. **Dependencies**
   - Go 1.20+
   - Echo Framework
   - PostgreSQL
   - Redis (optional)
   - JWT

2. **Architecture**
   - Clean Architecture
   - Dependency Injection
   - Interface Segregation
   - Repository Pattern

3. **Security**
   - JWT Authentication
   - Rate Limiting
   - Input Validation
   - SQL Injection Prevention
   - XSS Protection

## Development Guidelines

### Code Style

1. **Naming Conventions**
   - Files: kebab-case
   - Components: PascalCase
   - Functions: camelCase
   - Constants: UPPER_SNAKE_CASE

2. **File Organization**
   - Group related files
   - Clear directory structure
   - Consistent imports
   - Modular exports

3. **Error Handling**
   - Comprehensive error types
   - Proper error propagation
   - User-friendly error messages
   - Error logging

### API Design

1. **RESTful Conventions**
   - Consistent endpoints
   - Proper HTTP methods
   - Standard response formats
   - Proper error codes

2. **Authentication**
   - JWT tokens
   - Refresh tokens
   - Secure storage
   - Token expiration

3. **Rate Limiting**
   - Per endpoint limits
   - IP-based tracking
   - User-based tracking
   - Clear error messages

## Testing Strategy

### Frontend

1. **Unit Tests**
   - Component behavior
   - API client
   - Utility functions
   - State management

2. **Integration Tests**
   - Component interactions
   - API integration
   - State management
   - Error handling

3. **E2E Tests**
   - User flows
   - Authentication
   - Shopping cart
   - Checkout process

### Backend

1. **Unit Tests**
   - Handlers
   - Services
   - Models
   - Utilities

2. **Integration Tests**
   - Database integration
   - API endpoints
   - Authentication
   - Error handling

3. **Performance Tests**
   - Load testing
   - Stress testing
   - API response times
   - Database queries

## Deployment Strategy

### Frontend

1. **Build Process**
   - Vite build
   - TypeScript compilation
   - CSS minification
   - Image optimization

2. **Deployment**
   - CI/CD pipeline
   - Environment variables
   - Cache invalidation
   - Rollback strategy

### Backend

1. **Build Process**
   - Go build
   - Dependency management
   - Configuration validation
   - Security checks

2. **Deployment**
   - Docker containers
   - Kubernetes (optional)
   - Load balancing
   - Health checks

## Monitoring and Logging

### Frontend

1. **Error Tracking**
   - Client-side errors
   - API errors
   - Performance metrics

2. **Analytics**
   - User behavior
   - Page views
   - Conversion rates
   - Error rates

### Backend

1. **Error Logging**
   - API errors
   - Database errors
   - Authentication failures

2. **Performance Metrics**
   - API response times
   - Database queries
   - Memory usage
   - CPU usage
