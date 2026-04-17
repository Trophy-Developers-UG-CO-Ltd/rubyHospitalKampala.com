# Ruby Hospital Kampala - Monorepo Structure

## 📁 Project Organization

This is a **monorepo** containing the complete Ruby Hospital Kampala system with separated frontend, backend, and shared code.

```
ruby-hospital-kampala/
├── frontend/                  # Next.js 16.2.4 Frontend
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   ├── components/      # React components
│   │   ├── lib/             # Utilities & API client
│   │   ├── types/           # TypeScript types (from @ruby-hospital/shared)
│   │   └── middleware.ts    # Language routing
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── README.md            # Frontend docs
│
├── backend/                   # NestJS REST API
│   ├── src/
│   │   ├── main.ts          # Entry point
│   │   ├── app.module.ts    # Root module
│   │   ├── modules/         # Feature modules
│   │   │   ├── homepage/
│   │   │   ├── doctors/
│   │   │   ├── specialties/
│   │   │   ├── appointments/
│   │   │   └── faqs/
│   │   ├── database/        # TypeORM entities & migrations
│   │   └── common/          # Shared utilities
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── README.md            # Backend docs
│
├── shared/                    # Shared Types & Utils
│   ├── types/
│   │   ├── homepage.ts
│   │   ├── doctor.ts
│   │   ├── specialty.ts
│   │   ├── appointment.ts
│   │   ├── faq.ts
│   │   └── index.ts         # Exports all types
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                      # Documentation
│   ├── SETUP.md             # Setup guide
│   ├── ARCHITECTURE.md      # Architecture overview
│   ├── API.md               # API documentation
│   └── DEPLOYMENT.md        # Deployment guide
│
├── .gitignore
├── package.json             # Monorepo root
└── README.md                # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and **npm** 9+ (or **pnpm**)
- **PostgreSQL** 13+ (for backend)
- **Git**

### Installation

1. **Clone & Install**
   ```bash
   git clone <repository>
   cd ruby-hospital-kampala
   npm install
   ```

2. **Setup Backend Database**
   ```bash
   cd backend
   cp .env.example .env.local
   # Edit .env.local with your database credentials
   npm run migration:run
   ```

3. **Setup Frontend Environment**
   ```bash
   cd ../frontend
   cp .env.example .env.local
   # Edit .env.local to point to backend API
   ```

4. **Start Development Servers**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm run start:dev

   # Terminal 2: Frontend
   cd ../frontend
   npm run dev
   ```

5. **Access Applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Backend Swagger: http://localhost:3001/api/docs (when configured)

---

## 📦 Workspaces

This project uses **npm workspaces** for monorepo management.

### Frontend (`./frontend`)
- **Framework**: Next.js 16.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2.2
- **Animation**: Framer Motion
- **Routing**: React Router 7.14.1 (admin app)
- **Port**: 3000

### Backend (`./backend`)
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL with TypeORM
- **Port**: 3001

### Shared (`./shared`)
- Shared TypeScript types used by both frontend and backend
- Central source of truth for data models

---

## 🔄 Development Workflow

### Running All Services

```bash
# Start all dev servers (requires tmux or multiple terminals)
npm run dev

# Or start individually:
npm run dev:frontend    # Start frontend only
npm run dev:backend     # Start backend only
```

### Building for Production

```bash
npm run build            # Build all workspaces
npm run build:frontend   # Build frontend only
npm run build:backend    # Build backend only
```

### Type Checking

```bash
npm run type-check      # Check types in all workspaces
npm run lint            # Lint all workspaces
```

---

## 🏗️ Architecture Overview

### Frontend (Next.js)
- **Pages**: Language-based routing (`/[lang]/...`)
- **Components**: Modular, reusable React components
- **API Client**: Type-safe fetch functions in `lib/api/client.ts`
- **State**: React hooks + optional context API
- **Styling**: Tailwind CSS with custom theme

### Backend (NestJS)
- **Controllers**: Handle HTTP requests
- **Services**: Business logic and database operations
- **Modules**: Organized by feature (homepage, doctors, etc.)
- **Database**: PostgreSQL with TypeORM ORM
- **Validation**: Class validators with DTOs

### Shared Types
- Defined in `shared/types/`
- Imported by both frontend and backend
- Ensures type consistency across the system

---

## 📡 API Endpoints

All endpoints follow RESTful conventions:

### Public Endpoints
- `GET /api/v1/homepage` - Homepage data
- `GET /api/v1/doctors` - List all doctors
- `GET /api/v1/doctors/:slug` - Get doctor details
- `GET /api/v1/specialties` - List all specialties
- `GET /api/v1/specialties/:slug` - Get specialty details
- `GET /api/v1/faqs` - List FAQs
- `POST /api/v1/appointments/inquire` - Create appointment inquiry

---

## 🌍 Multi-Language Support

The frontend supports 3 languages via URL routing:
- **English** (en): http://localhost:3000/en
- **Luganda** (lg): http://localhost:3000/lg
- **Swahili** (sw): http://localhost:3000/sw

Language middleware automatically redirects to default language.

---

## 🔐 Environment Variables

### Backend (`.env`)
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=ruby_hospital
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## 🧪 Testing

### Frontend
```bash
cd frontend
npm test                # Run tests
npm run test:watch     # Watch mode
npm run test:cov       # Coverage report
```

### Backend
```bash
cd backend
npm test                # Run tests
npm run test:watch     # Watch mode
npm run test:e2e       # End-to-end tests
```

---

## 🚢 Deployment

### Frontend (Vercel recommended)
```bash
cd frontend
npm run build
npm start
```

Or deploy to Vercel with automatic deployments from GitHub.

### Backend (Docker or traditional server)
```bash
cd backend
npm run build
npm run start:prod
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

---

## 📚 Documentation

- **[SETUP.md](docs/SETUP.md)** - Detailed setup guide
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - System architecture
- **[API.md](docs/API.md)** - API documentation
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide
- **[frontend/README.md](frontend/README.md)** - Frontend-specific docs
- **[backend/README.md](backend/README.md)** - Backend-specific docs

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16.2.4 - React framework
- TypeScript - Type safety
- Tailwind CSS 4.2.2 - Utility-first CSS
- Framer Motion - Animations
- React 19 - UI library
- Lucide React - Icons
- React Hook Form + Zod - Form handling and validation

### Backend
- NestJS - Node.js framework
- TypeORM - ORM
- PostgreSQL - Database
- TypeScript - Type safety

### DevOps
- Docker - Containerization
- GitHub Actions - CI/CD (optional)

---

## 🤝 Contributing

1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes in appropriate workspace
3. Test: `npm run type-check && npm run lint`
4. Commit: `git commit -am 'Add feature'`
5. Push: `git push origin feature/your-feature`
6. Create pull request

---

## 📞 Support

For questions or issues:
- Check documentation in `docs/`
- Review workspace-specific READMEs
- Open an issue on GitHub

---

## 📄 License

MIT License - See LICENSE file for details

---

**Built with ❤️ for Ruby Hospital Kampala**
*Care with clarity and confidence.*
