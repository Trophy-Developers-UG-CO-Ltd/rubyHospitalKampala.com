# 📋 Implementation Checklist - Monorepo Migration

Complete these steps to finalize your monorepo setup and move the existing frontend files.

---

## ✅ Part 1: Understand the New Structure

- [x] New directories created:
  - `frontend/` - Move Next.js app here
  - `backend/` - NestJS API server (ready to use)
  - `shared/` - Shared TypeScript types (ready to use)
  
- [x] Documentation created:
  - `MONOREPO.md` - Complete monorepo guide
  - `MIGRATION_GUIDE.md` - Step-by-step migration
  - `docs/INDEX.md` - Documentation index

---

## ✅ Part 2: Move Frontend Files to `frontend/` Folder

**Your current project files:**
- ✓ `src/` directory (all components, pages, utilities)
- ✓ Root configuration files

**Action needed:** Move these to `frontend/`:

### Using Windows PowerShell:

```powershell
# 1. Move src directory to frontend
Move-Item -Path .\src -Destination .\frontend\src

# 2. Move config files to frontend
Move-Item -Path .\middleware.ts -Destination .\frontend\src\middleware.ts
```

### Or manually in Explorer:
1. Cut `src/` folder → Paste in `frontend/` folder
2. Cut `middleware.ts` → Paste in `frontend/src/middleware.ts`

---

## ✅ Part 3: Clean Up Root Directory

After moving files, your root directory should contain:

```
ruby-hospital-kampala/
├── frontend/              ✓ (contains src/)
├── backend/               ✓ (pre-created)
├── shared/                ✓ (pre-created)
├── docs/                  ✓ (created)
├── .gitignore             ✓ (root level)
├── package.json           ✓ (monorepo config - UPDATED)
├── tsconfig.json          ✓ (root level)
├── tsconfig.node.json     ✓ (root level)
├── eslint.config.mjs      ✓ (root level)
├── README.md              ✓ (original)
├── SETUP_COMPLETE.md      ✓ (from previous setup)
├── ARCHITECTURE.md        ✓ (from previous setup)
├── MONOREPO.md            ✓ (NEW - for monorepo)
├── MIGRATION_GUIDE.md     ✓ (NEW - this guide)
└── rubyHospitalKampala.com.code-workspace
```

**Remove from root** (should not be here anymore):
- ❌ `src/` directory (moved to `frontend/src/`)
- ❌ `middleware.ts` (moved to `frontend/src/middleware.ts`)

**Root-level files to clean up:**
- [ ] `next.config.js` - Move to `frontend/`
- [ ] `tailwind.config.ts` - Move to `frontend/`
- [ ] `postcss.config.js` - Move to `frontend/`
- [ ] `globals.css` - Move to `frontend/src/app/globals.css`

---

## ✅ Part 4: Install Dependencies

```powershell
# In root directory
npm install

# This installs dependencies for:
# - frontend/ (Next.js)
# - backend/ (NestJS)
# - shared/ (types)
```

---

## ✅ Part 5: Setup Backend Environment

```powershell
# Go to backend folder
cd backend

# Copy environment file
Copy-Item .env.example .env.local

# Edit .env.local with your database credentials
# (Using Notepad or VS Code)
```

**Configure `.env.local`:**
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=<your_password>
DB_NAME=ruby_hospital
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

---

## ✅ Part 6: Setup Frontend Environment

```powershell
# Go to frontend folder
cd ..\frontend

# Copy environment file
Copy-Item .env.example .env.local

# Edit .env.local (already configured)
```

**Verify `.env.local` has:**
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## ✅ Part 7: Start Development Servers

### Terminal 1: Backend Server
```powershell
cd backend
npm run start:dev

# Output should show:
# 🏥 Ruby Hospital Kampala API running on http://localhost:3001
```

### Terminal 2: Frontend Server
```powershell
cd frontend
npm run dev

# Output should show:
# ▲ Next.js running on http://localhost:3000
```

---

## ✅ Part 8: Verify Everything Works

### Test Backend
```
Visit: http://localhost:3001/api/v1/homepage

Expected response:
{
  "stats": [...],
  "quickActions": [...],
  "specialties": [...],
  "doctors": [...],
  "testimonials": [...],
  "faqs": [...]
}
```

### Test Frontend
```
Visit: http://localhost:3000

Expected: Ruby Hospital Kampala homepage in English

Visit: http://localhost:3000/en    → English
Visit: http://localhost:3000/lg    → Luganda
Visit: http://localhost:3000/sw    → Swahili
```

### Test Language Redirect
```
Visit: http://localhost:3000
Expected: Redirects to http://localhost:3000/en
```

---

## 📦 File Structure After Migration

```
ruby-hospital-kampala/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── [lang]/
│   │   │   ├── globals.css
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── homepage/     (10 sections)
│   │   │   ├── layout/       (Header, Footer)
│   │   │   └── shared/       (8 reusable components)
│   │   ├── lib/
│   │   │   ├── api/          (client.ts, endpoints.ts)
│   │   │   ├── i18n/         (config.ts, dictionary.ts)
│   │   │   ├── seo/
│   │   │   ├── utils/
│   │   │   └── validations/
│   │   ├── types/
│   │   └── middleware.ts
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   ├── .env.local           (create from .env.example)
│   └── README.md
│
├── backend/
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── modules/
│   │   │   ├── homepage/
│   │   │   ├── doctors/
│   │   │   ├── specialties/
│   │   │   ├── appointments/
│   │   │   └── faqs/
│   │   ├── database/
│   │   └── common/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   ├── .env.local           (create from .env.example)
│   └── README.md
│
├── shared/
│   ├── types/
│   │   ├── homepage.ts
│   │   ├── doctor.ts
│   │   ├── specialty.ts
│   │   ├── appointment.ts
│   │   ├── faq.ts
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
├── docs/
│   ├── INDEX.md
│   ├── API.md              (coming)
│   └── DEPLOYMENT.md       (coming)
│
├── package.json             (MONOREPO ROOT - UPDATED)
├── .gitignore
├── README.md
├── MONOREPO.md              (NEW)
├── MIGRATION_GUIDE.md       (NEW)
└── SETUP_COMPLETE.md
```

---

## 🔍 Verification Checklist

After completing all steps:

- [ ] `frontend/src/` exists with all original files
- [ ] `backend/src/` has NestJS structure
- [ ] `shared/types/` has type definitions
- [ ] `npm install` runs without errors
- [ ] Backend starts: `npm run dev:backend`
- [ ] Frontend starts: `npm run dev:frontend`
- [ ] Frontend accessible at http://localhost:3000
- [ ] Backend API accessible at http://localhost:3001
- [ ] Language routing works (/en, /lg, /sw)
- [ ] No import errors in frontend
- [ ] No compilation errors in backend

---

## 🚀 Next Development Steps

### Phase 1: Backend Implementation
- [ ] Create database entities in `backend/src/database/entities/`
- [ ] Implement repository pattern for data access
- [ ] Add real data fetching in service methods
- [ ] Create database migrations

### Phase 2: API Integration
- [ ] Test API endpoints with Postman/Insomnia
- [ ] Connect frontend API client to backend
- [ ] Verify data flows correctly

### Phase 3: Frontend Enhancement
- [ ] Implement remaining pages (doctors, specialties, etc.)
- [ ] Add form handling and validation
- [ ] Implement appointment booking

### Phase 4: Advanced Features
- [ ] Authentication (JWT)
- [ ] Admin dashboard
- [ ] CMS integration
- [ ] Analytics

---

## 📞 Troubleshooting

### Issue: "Cannot find module '@ruby-hospital/shared'"
**Solution**: 
```powershell
# Run from root directory
npm install
```

### Issue: Backend won't start (port in use)
**Solution**:
```powershell
# Use different port
$env:PORT=3002
npm run dev:backend
```

### Issue: Frontend can't connect to backend
**Solution**:
1. Verify backend is running on 3001
2. Check `NEXT_PUBLIC_API_URL` in `frontend/.env.local`
3. Check browser console for CORS errors

### Issue: Database connection failed
**Solution**:
1. Verify PostgreSQL is running
2. Check credentials in `backend/.env.local`
3. Verify database exists

---

## 📚 Documentation Reference

- **[MONOREPO.md](../MONOREPO.md)** - Full monorepo guide
- **[frontend/README.md](../frontend/README.md)** - Frontend development
- **[backend/README.md](../backend/README.md)** - Backend development
- **[docs/INDEX.md](../docs/INDEX.md)** - All documentation

---

## ✨ You're Ready!

Once you complete these steps, your project will be:
- ✅ Properly organized into frontend and backend
- ✅ Ready for full-stack development
- ✅ Scalable and maintainable
- ✅ Production-ready architecture

**Next command to run:**
```powershell
npm install
```

Then follow Part 7 to start both servers!

---

**Built with ❤️ for Ruby Hospital Kampala**
