# Backend API - Ruby Hospital Kampala

NestJS-based REST API for the Ruby Hospital Kampala system.

## Quick Start

```bash
# Install dependencies
npm install

# Setup database
npm run migration:run

# Start development server
npm run start:dev
```

## Project Structure

```
src/
├── main.ts                    # Application entry point
├── app.module.ts              # Root module
├── modules/
│   ├── homepage/              # Homepage endpoint
│   ├── doctors/               # Doctor management
│   ├── specialties/           # Medical specialties
│   ├── appointments/          # Appointment booking
│   └── faqs/                  # FAQ management
├── common/                    # Shared utilities
├── database/
│   ├── entities/              # TypeORM entities
│   └── migrations/            # Database migrations
└── config/                    # Configuration
```

## API Endpoints

### Homepage
- `GET /api/v1/homepage` - Get homepage data (stats, specialties, doctors, FAQs)

### Doctors
- `GET /api/v1/doctors` - Get all doctors
- `GET /api/v1/doctors/:slug` - Get doctor by slug

### Specialties
- `GET /api/v1/specialties` - Get all specialties
- `GET /api/v1/specialties/:slug` - Get specialty by slug

### Appointments
- `POST /api/v1/appointments/inquire` - Create appointment inquiry
- `GET /api/v1/appointments` - Get all appointments

### FAQs
- `GET /api/v1/faqs` - Get all FAQs

## Available Scripts

```bash
npm run build          # Build for production
npm run start          # Start production server
npm run start:dev      # Start dev server with hot reload
npm run start:debug    # Start with debugger
npm run lint           # Run ESLint
npm run test           # Run tests
npm run test:cov       # Run tests with coverage
```

## Environment Variables

See `.env.example` for required environment variables.

## Database

Using PostgreSQL with TypeORM.

```bash
npm run migration:generate -- -n NameOfMigration
npm run migration:run
npm run migration:revert
```

## Documentation

See [BACKEND.md](../../BACKEND.md) in the root for more details.
