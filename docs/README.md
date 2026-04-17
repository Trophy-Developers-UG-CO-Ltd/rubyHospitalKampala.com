# Ruby Hospital Kampala - Homepage System

> A production-ready hospital homepage system built with modern web technologies for patient trust, conversion, and healthcare operational excellence.

## 🏥 Overview

This is a complete Next.js implementation of the Ruby Hospital Kampala homepage system, featuring:

- **Language-first routing** with support for English, Luganda, and Swahili
- **Component-driven architecture** with reusable, type-safe components
- **SEO optimization** with metadata, JSON-LD schemas, and structured data
- **Mobile-first design** built on Tailwind CSS and Framer Motion
- **API integration ready** with fully stubbed endpoints and client functions
- **Production-ready** with TypeScript, validation, and error handling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. **Clone or download the project**

```bash
cd rubyHospitalKampala.com
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000/en` to see the homepage in English.

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [lang]/                   # Language-based routing
│   │   ├── layout.tsx           # Language layout with header/footer
│   │   ├── page.tsx             # Homepage
│   │   ├── doctors/             # Doctors listing & detail
│   │   ├── specialties/         # Specialties listing & detail
│   │   ├── appointments/book    # Appointment booking
│   │   ├── emergency/           # Emergency support
│   │   ├── international-patients/
│   │   ├── about/
│   │   ├── contact/
│   │   └── patient-guide/
│   ├── api/
│   │   └── revalidate/          # ISR revalidation endpoint
│   ├── globals.css
│   └── layout.tsx               # Root layout
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx      # Navigation header
│   │   └── site-footer.tsx      # Footer with links
│   ├── homepage/
│   │   ├── hero.tsx             # Hero section with stats
│   │   ├── quick-actions.tsx    # Task-first navigation
│   │   ├── trust-section.tsx    # Trust signals
│   │   ├── specialties-section.tsx
│   │   ├── doctors-section.tsx
│   │   ├── patient-journey.tsx  # 3-step patient flow
│   │   ├── testimonials-section.tsx
│   │   ├── international-patients-section.tsx
│   │   ├── faq-section.tsx
│   │   └── final-cta.tsx
│   └── shared/
│       ├── section-heading.tsx  # Reusable section heading
│       ├── stat-card.tsx        # Stat display card
│       ├── doctor-card.tsx      # Doctor profile card
│       ├── specialty-card.tsx   # Specialty card
│       ├── faq-accordion.tsx    # Collapsible FAQ
│       ├── button.tsx           # Button component
│       ├── input.tsx            # Input field
│       └── select.tsx           # Select dropdown
│
├── lib/
│   ├── api/
│   │   ├── client.ts            # API client functions
│   │   └── endpoints.ts         # API endpoint definitions
│   ├── i18n/
│   │   ├── config.ts            # Language configuration
│   │   └── dictionary.ts        # Translation strings
│   ├── seo/
│   │   ├── metadata.ts          # Metadata generators
│   │   └── schema.ts            # JSON-LD schema builders
│   ├── validations/
│   │   └── appointment.ts       # Form validation schemas
│   └── utils/
│       ├── cn.ts                # Class name utility
│       └── format-date.ts       # Date formatting
│
├── types/
│   ├── homepage.ts
│   ├── doctor.ts
│   ├── specialty.ts
│   ├── appointment.ts
│   └── faq.ts
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── package.json
└── .env.example
```

## 🎯 Key Features

### 1. **Language Routing**

Routes use language prefixes for SEO and multi-market support:
- `/en` - English
- `/lg` - Luganda
- `/sw` - Swahili

All routing is automatically validated and type-safe.

### 2. **Component Architecture**

**Shared Components** - Reusable across pages:
- `SectionHeading` - Consistent section headers
- `StatCard` - Data display
- `DoctorCard` - Doctor profiles
- `SpecialtyCard` - Medical services
- `FAQAccordion` - Expandable Q&A
- Form inputs (`Button`, `Input`, `Select`)

**Layout Components**:
- `SiteHeader` - Navigation and branding
- `SiteFooter` - Footer with legal and social links

**Homepage Sections** - Modular, reusable sections:
- Hero with stats and CTA
- Quick actions for task-first navigation
- Trust signals and credibility
- Specialties showcase
- Featured doctors
- Patient journey steps
- Testimonials
- International patient support
- FAQ
- Final CTA

### 3. **API Integration**

Fully typed API client with endpoints for:

**Public endpoints:**
- `GET /api/v1/homepage` - Homepage payload
- `GET /api/v1/doctors` - Doctor listing
- `GET /api/v1/doctors/:slug` - Doctor detail
- `GET /api/v1/specialties` - Specialty listing
- `GET /api/v1/specialties/:slug` - Specialty detail
- `GET /api/v1/faqs` - FAQ entries
- `GET /api/v1/testimonials` - Patient testimonials

**Appointment endpoints:**
- `POST /api/v1/appointments/inquiries/public` - Submit inquiry
- `POST /api/v1/appointments/bookings/public` - Book appointment
- `GET /api/v1/doctors/availability` - Check availability

**Admin endpoints:**
- `GET /api/v1/admin/appointments` - View appointments
- `PATCH /api/v1/admin/appointments/:id/status` - Update status
- `GET /api/v1/admin/homepage` - Homepage config
- `PATCH /api/v1/admin/homepage` - Update homepage

### 4. **SEO Optimization**

- Metadata generation for all pages
- JSON-LD schema builders for Hospital, Physician, FAQ, Breadcrumbs
- Open Graph and Twitter card support
- Canonical URLs

### 5. **Performance**

- Server-side rendering where appropriate
- Image optimization with `next/image`
- Incremental Static Regeneration (ISR) ready
- Motion reduced by default for accessibility
- Minimal JavaScript bundles

### 6. **Accessibility**

- Semantic HTML
- ARIA labels and roles
- Focus states and keyboard navigation
- Color contrast compliance
- Reduced motion support

## 📦 Dependencies

### Core
- **Next.js 16.2.4** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety

### UI/Styling
- **Tailwind CSS 4.2.2** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Forms
- **Zod** - Form validation
- **React Hook Form** - Form state management

### Optional (for future phases)
- **SWR** or **React Query** - Data fetching

## 🛠 Development

### Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run type-check # Check TypeScript types
```

### Adding a New Page

1. Create a folder under `src/app/[lang]/`
2. Create `page.tsx` with your page component
3. Layout is automatically inherited from parent

```typescript
// src/app/[lang]/my-page/page.tsx
interface PageProps {
  params: {
    lang: string;
  };
}

export default function MyPage({ params }: PageProps) {
  const { lang } = params;
  return (
    <div>
      {/* Your content */}
    </div>
  );
}
```

### Adding a New Shared Component

1. Create component in `src/components/shared/`
2. Export from component file
3. Import and use anywhere

```typescript
// src/components/shared/my-component.tsx
export function MyComponent({ prop }: Props) {
  return <div>{prop}</div>;
}

// Usage
import { MyComponent } from "@/components/shared/my-component";
```

### Connecting to Real API

1. Update `NEXT_PUBLIC_API_URL` in `.env.local`
2. Implement API functions in `src/lib/api/client.ts`
3. Use in components or Server Components

```typescript
// src/lib/api/client.ts
export async function fetchDoctors() {
  const response = await fetch(`${API_BASE_URL}/v1/doctors`);
  return response.json();
}

// src/app/[lang]/doctors/page.tsx
import { fetchDoctors } from "@/lib/api/client";

export default async function DoctorsPage() {
  const doctors = await fetchDoctors();
  return <DoctorsList doctors={doctors} />;
}
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
theme: {
  extend: {
    colors: {
      teal: { /* your colors */ },
    },
  },
},
```

### Typography

Modify font families and scales in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ["Your Font Family"],
    },
  },
},
```

### Content

Update content in:
- `src/lib/i18n/dictionary.ts` - Text and translations
- Component props - Static data in each section component

## 📋 Build Order (Recommended)

### Phase 1: Foundation ✅
- [x] App shell and routing
- [x] Header/footer layout
- [x] Homepage sections
- [x] Shared components
- [x] Basic styling

### Phase 2: Core Pages
- [ ] Doctors listing and detail pages
- [ ] Specialties listing and detail pages
- [ ] Appointment booking flow
- [ ] FAQ pages

### Phase 3: Integration
- [ ] Connect to real API backend
- [ ] CMS/admin integration
- [ ] Analytics setup
- [ ] ISR revalidation

### Phase 4: Polish
- [ ] Multilingual content
- [ ] International patient workflows
- [ ] Doctor availability integration
- [ ] Patient dashboard/booking status

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Environment Variables for Production

```
NEXT_PUBLIC_API_URL=https://api.rubyhospital.ug/api
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📝 Notes

- All routes require a language prefix (`/en`, `/lg`, `/sw`)
- Images use placeholder service (replace with real CDN in production)
- API endpoints are stubbed - implement backend accordingly
- Form validation schemas are prepared but optional

## 🤝 Support

For questions or issues:
1. Check the component examples in `src/components/`
2. Review API integration in `src/lib/api/`
3. Consult the type definitions in `src/types/`

---

**Built for Ruby Hospital Kampala - Care with clarity and confidence.**
