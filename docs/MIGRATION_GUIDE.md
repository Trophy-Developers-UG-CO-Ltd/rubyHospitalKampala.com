# Ruby Hospital Kampala - Migration to Monorepo

## What Changed

Your project has been restructured from a single frontend-only setup to a **full-stack monorepo** with separated:

- **Frontend** (Next.js) - User interface and client-side logic
- **Backend** (NestJS) - REST API and business logic
- **Shared** - Common types used by both frontend and backend

---

## 📁 New Structure

```
ruby-hospital-kampala/
├── frontend/                   # Move src/ files here
├── backend/                    # New NestJS API
├── shared/                     # Shared types
└── docs/                       # Documentation
```

### Key Differences

| Aspect | Before | After |
|--------|--------|-------|
| Frontend location | `src/` | `frontend/src/` |
| Backend | None | `backend/src/` |
| Shared types | `src/types/` | `shared/types/` |
| Package management | Single | Workspaces |
| API | Frontend only | Frontend + Backend |

---

## 🚀 Migration Steps

### Step 1: Move Frontend Files

Your current `src/` directory needs to be moved to `frontend/src/`:

```bash
# Copy the src directory to frontend
cp -r src frontend/

# Also copy these root files to frontend:
cp .env.example frontend/.env.example
cp .gitignore frontend/.gitignore

# Keep the workspace root clean
```

### Step 2: Update Frontend Imports

The frontend already uses `@ruby-hospital/shared` for types, which is configured in `frontend/tsconfig.json`.

### Step 3: Update Frontend API Calls

In `frontend/src/lib/api/client.ts`, update the API base URL:

```typescript
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
```

Update `.env.example`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Step 4: Install Dependencies

```bash
npm install
```

This installs dependencies for all workspaces.

### Step 5: Setup Backend Database

```bash
cd backend
cp .env.example .env.local
# Edit .env.local with your PostgreSQL credentials
npm run migration:run  # (when migrations are ready)
```

---

## 🎯 Backend Setup

The backend is pre-configured with:

- ✅ NestJS 10 framework
- ✅ Module structure (Homepage, Doctors, Specialties, Appointments, FAQs)
- ✅ PostgreSQL + TypeORM integration
- ✅ CORS enabled for frontend
- ✅ Global validation pipes
- ✅ Environment configuration

### Creating Backend Entities

Example: `backend/src/modules/doctors/entities/doctor.entity.ts`

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  title: string;

  // ... more columns
}
```

### Creating Migrations

```bash
cd backend
npm run migration:generate -- -n CreateDoctorTable
npm run migration:run
```

---

## 🔄 Development Workflow

### Terminal 1: Backend
```bash
cd backend
npm run start:dev
# API runs on http://localhost:3001
```

### Terminal 2: Frontend
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

---

## 📡 API Integration

### Frontend API Client Setup

The frontend already has API client functions in `frontend/src/lib/api/client.ts`:

```typescript
import { API_ENDPOINTS } from './endpoints';

export async function fetchHomepage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.HOMEPAGE}`
  );
  return res.json();
}
```

### Backend API Endpoints

Backend provides these endpoints:

```
GET  /api/v1/homepage
GET  /api/v1/doctors
GET  /api/v1/doctors/:slug
GET  /api/v1/specialties
GET  /api/v1/specialties/:slug
GET  /api/v1/faqs
POST /api/v1/appointments/inquire
```

---

## 🔑 Environment Variables

### Backend `.env`
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

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## ✅ Next Steps

1. **Move frontend files**
   ```bash
   cp -r src frontend/
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```

3. **Start backend dev server**
   ```bash
   cd backend
   npm run start:dev
   ```

4. **Start frontend dev server** (in new terminal)
   ```bash
   cd frontend
   npm run dev
   ```

5. **Implement backend logic**
   - Create database entities
   - Implement services
   - Connect database

6. **Connect frontend to backend**
   - Update API client functions
   - Test API integration

---

## 📦 Shared Types

The `shared/` workspace contains types used by both frontend and backend:

```typescript
// shared/types/doctor.ts
export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  // ...
}
```

### Using Shared Types

**Backend**:
```typescript
import type { Doctor } from '@ruby-hospital/shared';
```

**Frontend**:
```typescript
import type { Doctor } from '@ruby-hospital/shared';
```

---

## 🐳 Docker Setup (Optional)

### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "start:prod"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ruby_hospital
    ports:
      - "5432:5432"
  
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    depends_on:
      - postgres
  
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
```

---

## 📚 Documentation

- **[MONOREPO.md](MONOREPO.md)** - This monorepo guide
- **[frontend/README.md](frontend/README.md)** - Frontend docs
- **[backend/README.md](backend/README.md)** - Backend docs
- **[docs/](docs/)** - Additional documentation

---

## ⚠️ Common Issues

### "Cannot find module '@ruby-hospital/shared'"
- Ensure `npm install` was run in root directory
- Check `tsconfig.json` paths configuration
- Verify `shared/package.json` exists

### Backend not starting
- Check if port 3001 is already in use
- Verify PostgreSQL is running
- Check `.env.local` credentials

### Frontend can't connect to backend
- Ensure backend is running on 3001
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Check CORS configuration in backend

---

**Your monorepo is ready! 🚀**

See [MONOREPO.md](MONOREPO.md) for complete documentation.
