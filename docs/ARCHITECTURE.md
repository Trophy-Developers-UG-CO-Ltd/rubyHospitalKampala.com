# Ruby Hospital Kampala - System Architecture

## Project Setup Complete ✅

This document outlines the complete project structure and how all components work together.

---

## Directory Structure

### 📁 Root Files
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS theme configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Project dependencies and scripts
- `.env.example` - Environment variables template
- `.gitignore` - Git ignore rules
- `middleware.ts` - Language routing middleware
- `README.md` - Getting started guide

### 📁 src/app - App Router Structure
```
src/app/
├── globals.css          - Global Tailwind styles
├── layout.tsx           - Root layout wrapper
├── api/
│   └── revalidate/      - ISR revalidation endpoint
└── [lang]/              - Language-based routing
    ├── layout.tsx       - Language layout with Header/Footer
    ├── page.tsx         - Homepage (/)
    ├── doctors/
    │   ├── page.tsx     - Doctors listing
    │   └── [slug]/
    │       └── page.tsx - Doctor detail page
    ├── specialties/
    │   ├── page.tsx     - Specialties listing
    │   └── [slug]/
    │       └── page.tsx - Specialty detail page
    ├── appointments/
    │   └── book/
    │       └── page.tsx - Appointment booking
    ├── emergency/
    │   └── page.tsx     - Emergency support
    ├── international-patients/
    │   └── page.tsx     - International patient info
    ├── about/
    │   └── page.tsx     - About hospital
    ├── contact/
    │   └── page.tsx     - Contact information
    └── patient-guide/
        └── page.tsx     - Patient guide
```

### 🧩 src/components - Component Library

#### Layout Components
```
components/layout/
├── site-header.tsx      - Navigation header (sticky, logo, nav menu)
└── site-footer.tsx      - Footer with links (explore, hospital, contact sections)
```

#### Homepage Sections (Modular)
```
components/homepage/
├── hero.tsx                         - Hero section with stats and CTA
├── quick-actions.tsx               - 4-action task selector
├── trust-section.tsx               - 3 trust signals with image
├── specialties-section.tsx         - Featured specialties grid
├── doctors-section.tsx             - Featured doctors cards
├── patient-journey.tsx             - 3-step journey flow
├── testimonials-section.tsx        - 3 patient testimonials
├── international-patients-section.tsx - International patient support
├── faq-section.tsx                - FAQ accordion
└── final-cta.tsx                   - Final call-to-action section
```

#### Shared/Reusable Components
```
components/shared/
├── section-heading.tsx    - Eyebrow + Title + Description
├── stat-card.tsx          - Stat display (value + label)
├── doctor-card.tsx        - Doctor profile card with badges
├── specialty-card.tsx     - Specialty card with image
├── faq-accordion.tsx      - Expandable FAQ item
├── button.tsx             - Styled button (primary/secondary/outline)
├── input.tsx              - Text input with label/error
└── select.tsx             - Dropdown with label/error
```

### 📚 src/lib - Utilities & Config

#### API Integration
```
lib/api/
├── endpoints.ts   - API endpoint definitions and constants
└── client.ts      - Fetch functions for all public endpoints
```

#### Internationalization
```
lib/i18n/
├── config.ts      - Supported languages and validation
└── dictionary.ts  - Translation strings and helper
```

#### SEO
```
lib/seo/
├── metadata.ts    - Metadata generators for pages
└── schema.ts      - JSON-LD schema builders
```

#### Validation
```
lib/validations/
└── appointment.ts - Form validation schemas (Zod-ready)
```

#### Utilities
```
lib/utils/
├── cn.ts          - Class name utility (merge conditionally)
├── format-date.ts - Date formatting functions
└── animations.ts  - Reusable motion animation configurations
```

### 📋 src/types - Type Definitions

```
types/
├── homepage.ts    - Homepage payload types
├── doctor.ts      - Doctor and DoctorsList types
├── specialty.ts   - Specialty and SpecialtiesList types
├── appointment.ts - Appointment-related types
└── faq.ts         - FAQ types
```

---

## 🔄 Data Flow

### Homepage Composition
```
HomePage (page.tsx)
├── Hero (with stats)
├── QuickActions (4 tasks)
├── TrustSection (3 signals)
├── SpecialtiesSection (4 specialties)
├── DoctorsSection (3 doctors)
├── JourneySection (3 steps)
├── TestimonialsSection (3 quotes)
├── InternationalPatientsSection
├── FAQSection (4 FAQs)
└── FinalCTA
```

### Component Reuse
```
DoctorCard
├── Used in DoctorsSection (homepage)
└── Can be reused in doctors/page.tsx

SpecialtyCard
├── Used in SpecialtiesSection (homepage)
└── Can be reused in specialties/page.tsx

FAQAccordion
├── Used in FAQSection (homepage)
└── Can be reused in dedicated FAQ page
```

---

## 🌍 Language Routing

All routes follow this pattern:
```
/[lang]/[route]

Examples:
/en/doctors
/en/doctors/dr-sarah-namutebi
/en/specialties/cardiology
/en/appointments/book
/lg/doctors                    (Luganda)
/sw/about                      (Swahili)
```

**Middleware automatically:**
- Redirects `/doctors` → `/en/doctors`
- Validates language is supported
- Preserves API routes without language prefix

---

## 📦 Dependencies

### Core Framework
- `next@16.2.4` - React framework with App Router
- `react@19` - UI library
- `typescript@5` - Type safety

### UI/Styling
- `tailwindcss@4.2.2` - Utility CSS framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library

### Optional (Ready to integrate)
- `zod` - Form validation
- `react-hook-form` - Form state

---

## 🎯 Development Workflow

### 1. Add a New Page

```typescript
// src/app/[lang]/new-page/page.tsx
interface PageProps {
  params: {
    lang: string;
  };
}

export default function NewPage({ params }: PageProps) {
  const { lang } = params;
  
  return (
    <div>
      {/* Your content */}
    </div>
  );
}
```

### 2. Create a New Component

```typescript
// src/components/shared/new-component.tsx
"use client";

interface Props {
  title: string;
  description?: string;
}

export function NewComponent({ title, description }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### 3. Fetch API Data

```typescript
// src/app/[lang]/doctors/page.tsx
import { fetchDoctors } from "@/lib/api/client";

export default async function DoctorsPage() {
  const doctors = await fetchDoctors();
  
  return (
    <div>
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
}
```

---

## 🚀 Getting Started Next Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```

3. **Visit homepage**
   - English: http://localhost:3000/en
   - Redirect: http://localhost:3000 → /en

4. **Build components**
   - Doctors listing/detail page
   - Specialties listing/detail page
   - Appointment booking flow
   - Contact/about pages

5. **Connect backend**
   - Implement backend API endpoints
   - Update `NEXT_PUBLIC_API_URL` in `.env.local`
   - Implement API client functions

6. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Set production env variables

---

## 📋 Checklist for Full Implementation

### Phase 1: Foundation ✅
- [x] Project structure created
- [x] Components split and modularized
- [x] Routing setup with language prefixes
- [x] Shared component library
- [x] Styling and layout

### Phase 2: Core Pages
- [ ] Doctors listing page
- [ ] Doctor detail page with filtering
- [ ] Specialties listing page
- [ ] Specialty detail page
- [ ] Appointment booking page
- [ ] Contact page

### Phase 3: Backend Integration
- [ ] API endpoint implementation
- [ ] Database schema (PostgreSQL)
- [ ] Authentication (optional)
- [ ] Admin panel for content management

### Phase 4: Advanced Features
- [ ] Multilingual content
- [ ] Appointment status tracking
- [ ] Doctor availability calendar
- [ ] Patient dashboard
- [ ] Analytics integration
- [ ] CMS for content blocks

---

## 🔗 Key Files to Understand

1. **`src/middleware.ts`** - Language routing logic
2. **`src/app/[lang]/layout.tsx`** - Language layout wrapper
3. **`src/app/[lang]/page.tsx`** - Homepage composition
4. **`src/lib/i18n/config.ts`** - Language configuration
5. **`src/lib/api/endpoints.ts`** - API definitions
6. **`tailwind.config.ts`** - Design tokens

---

## 💡 Pro Tips

1. **Reuse components** - Build once, use everywhere
2. **Type safety** - Use TypeScript for all props
3. **SEO metadata** - Add metadata to each page
4. **Performance** - Use Server Components where possible
5. **Accessibility** - Test with keyboard and screen readers
6. **Testing** - Components are easily testable with isolated props

---

For detailed information, see [README.md](README.md)
