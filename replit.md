# MedSupply Pro - Medical Equipment & Supplies Platform

## Overview

MedSupply Pro is a comprehensive web application for a medical equipment and pharmaceutical supplies company. The platform serves healthcare professionals by providing FDA-certified medical products, equipment catalogs, company information, and contact functionality. Built as a full-stack application with a modern React frontend and Express backend, it features a professional medical industry design with comprehensive product management and customer communication capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with shadcn/ui component library providing a consistent, professional design system
- **State Management**: TanStack Query (React Query) for server state management, caching, and data synchronization
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **Build Tool**: Vite for fast development and optimized production builds
- **Form Handling**: React Hook Form with Zod validation for robust form management and schema validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Development Server**: Custom Vite integration for seamless full-stack development experience
- **API Design**: RESTful endpoints organized by resource (products, team members, contact submissions)
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM with proper migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud-hosted database
- **Schema Management**: Shared schema definitions between frontend and backend using Drizzle Zod integration
- **Development Fallback**: In-memory storage implementation for development and testing environments

### Authentication and Authorization
- **Current State**: No authentication system implemented - public-facing informational website
- **Session Management**: Basic session infrastructure prepared using connect-pg-simple for future user authentication
- **Security Considerations**: CORS and basic security headers configured for production deployment

### External Dependencies
- **UI Components**: Radix UI primitives for accessible, unstyled components with shadcn/ui styling
- **Icons**: Lucide React for consistent iconography throughout the application
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **Validation**: Zod for runtime type checking and form validation schemas
- **Date Handling**: date-fns for date manipulation and formatting
- **Development Tools**: Replit-specific plugins for development environment integration

The architecture follows a monorepo structure with clear separation between client, server, and shared code, enabling maintainable full-stack development with TypeScript throughout the entire application stack.