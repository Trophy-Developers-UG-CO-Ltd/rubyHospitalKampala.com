# Frontend - Ruby Hospital Kampala

Next.js 15 frontend application for Ruby Hospital Kampala homepage system.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000

## Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── [lang]/               # Language-based routing
│       ├── page.tsx          # Homepage
│       ├── doctors/          # Doctor pages
│       ├── specialties/      # Specialty pages
│       ├── appointments/     # Appointment pages
│       └── ...               # Other routes
├── components/
│   ├── layout/               # Header, Footer
│   ├── homepage/             # Homepage sections
│   └── shared/               # Reusable components
├── lib/
│   ├── api/                  # API client functions
│   ├── i18n/                 # i18n configuration
│   ├── seo/                  # SEO utilities
│   └── utils/                # Helper utilities
├── types/                    # TypeScript definitions (uses @ruby-hospital/shared)
└── middleware.ts             # Language routing middleware
```

## Environment Variables

See `.env.example` for required variables.

```bash
cp .env.example .env.local
```

## Available Scripts

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## API Integration

The frontend connects to the backend API. Set the `NEXT_PUBLIC_API_URL` environment variable:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Multi-language Support

Supported languages: English (en), Luganda (lg), Swahili (sw)

Routes use language parameter:
- http://localhost:3000/en
- http://localhost:3000/lg
- http://localhost:3000/sw

## Features

- ✅ Multi-language support with URL routing
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ Type-safe with TypeScript
- ✅ ISR (Incremental Static Regeneration) ready

## Documentation

See [FRONTEND.md](../../FRONTEND.md) in the root for more details.
