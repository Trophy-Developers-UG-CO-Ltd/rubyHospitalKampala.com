# Ruby Hospital Kampala - Documentation Index

## 📖 Documentation Files

### Getting Started
- **[README.md](README.md)** - Project overview and quick start
- **[SETUP_COMPLETE.md](SETUP_COMPLETE.md)** - Setup completion checklist
- **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** - Migration from single frontend to monorepo

### Architecture & Structure
- **[MONOREPO.md](MONOREPO.md)** - Complete monorepo guide and structure
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture overview
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Frontend/Backend architecture

### Development Guides
- **[frontend/README.md](frontend/README.md)** - Frontend development guide
- **[backend/README.md](backend/README.md)** - Backend development guide

### API & Integration
- **[API.md](docs/API.md)** - API documentation (coming soon)
- **[frontend/src/lib/api/](frontend/src/lib/api/)** - API client implementation

### Deployment & DevOps
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment guide (coming soon)
- **[backend/.env.example](backend/.env.example)** - Backend environment variables
- **[frontend/.env.example](frontend/.env.example)** - Frontend environment variables

---

## 🎯 Quick Navigation

### For Frontend Developers
→ Start with [frontend/README.md](frontend/README.md)

### For Backend Developers
→ Start with [backend/README.md](backend/README.md)

### For Full Stack Setup
→ Follow [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)

### For System Architecture
→ Read [MONOREPO.md](MONOREPO.md) and [ARCHITECTURE.md](ARCHITECTURE.md)

---

## 📁 Project Structure

```
ruby-hospital-kampala/
├── frontend/                    # Next.js Frontend
│   ├── src/                    # Your existing src/ files here
│   ├── package.json
│   └── README.md
├── backend/                     # NestJS Backend
│   ├── src/
│   ├── package.json
│   └── README.md
├── shared/                      # Shared Types
│   ├── types/
│   └── package.json
├── docs/                        # Additional docs (coming)
├── MONOREPO.md                 # This structure
├── MIGRATION_GUIDE.md          # Migration instructions
└── README.md                   # Main readme
```

---

## 🚀 Getting Started Checklist

- [ ] Read [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)
- [ ] Move `src/` to `frontend/src/`
- [ ] Run `npm install` in root
- [ ] Setup backend database
- [ ] Start backend: `cd backend && npm run start:dev`
- [ ] Start frontend: `cd frontend && npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Check http://localhost:3001/api/v1/homepage

---

## 📞 Need Help?

1. Check the relevant README file for your workspace
2. Review [MONOREPO.md](MONOREPO.md) for system-wide guidance
3. See [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) for setup issues
4. Check environment variables in `.env.example` files

---

**Last Updated**: April 17, 2026
