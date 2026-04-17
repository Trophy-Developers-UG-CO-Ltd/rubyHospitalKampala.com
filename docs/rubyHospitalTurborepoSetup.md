# Ruby Hospital Kampala Turborepo Setup

This is a full starter architecture for a **polyglot frontend system** using:

* **Next.js 16.2.4** for the public website
* **Vite + React + TypeScript** for the admin app
* **shared packages** for UI, types, config, and API client
* **Turborepo** for orchestration
* **pnpm** as the package manager

This setup is designed for a hospital-grade web platform with SEO, booking flows, admin management, and reusable frontend primitives.

---

# 1. Monorepo Structure

```txt
ruby-hospital/
  apps/
    web/
    admin/
    api/
  packages/
    ui/
    types/
    config/
    api-client/
  .gitignore
  package.json
  pnpm-workspace.yaml
  turbo.json
  tsconfig.base.json
  README.md
```

---

# 2. Root Files

## `/package.json`

```json
{
  "name": "ruby-hospital-monorepo",
  "private": true,
  "packageManager": "pnpm@10.0.0",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "typecheck": "turbo typecheck",
    "clean": "turbo clean && rimraf node_modules"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "rimraf": "^6.0.1",
    "turbo": "^2.5.6",
    "typescript": "^5.8.3"
  }
}
```

## `/pnpm-workspace.yaml`

```yaml
packages:
  - apps/*
  - packages/*
```

## `/turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [
        ".next/**",
        "dist/**",
        "build/**"
      ]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"]
    },
    "clean": {
      "cache": false
    }
  }
}
```

## `/tsconfig.base.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "baseUrl": ".",
    "paths": {
      "@ruby/ui/*": ["packages/ui/src/*"],
      "@ruby/types/*": ["packages/types/src/*"],
      "@ruby/config/*": ["packages/config/*"],
      "@ruby/api-client/*": ["packages/api-client/src/*"]
    }
  }
}
```

## `/.gitignore`

```gitignore
node_modules
.pnpm-store
.turbo
.next
dist
build
coverage
.env
.env.*
!.env.example
.DS_Store
```

---

# 3. App: Public Website (Next.js)

## `/apps/web/package.json`

```json
{
  "name": "@ruby/web",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --project tsconfig.json --noEmit",
    "clean": "rimraf .next"
  },
  "dependencies": {
    "@ruby/api-client": "workspace:*",
    "@ruby/types": "workspace:*",
    "@ruby/ui": "workspace:*",
    "framer-motion": "^12.23.12",
    "lucide-react": "^0.542.0",
    "next": "16.2.4",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.61.1",
    "zod": "^4.1.5",
    "@hookform/resolvers": "^5.2.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.12",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "rimraf": "^6.0.1",
    "tailwindcss": "4.2.2",
    "typescript": "^5.8.3"
  }
}
```

## `/apps/web/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "incremental": true
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

## `/apps/web/next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
```

## `/apps/web/postcss.config.mjs`

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

## `/apps/web/src/app/globals.css`

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0f172a;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

## `/apps/web/src/app/layout.tsx`

```tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruby Hospital Kampala",
  description: "Trusted healthcare in Kampala.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## `/apps/web/src/app/page.tsx`

```tsx
import { Button } from "@ruby/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Ruby Hospital Kampala
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Healthcare experience with speed, trust, and clarity.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This Next.js app powers the public hospital website, SEO pages, doctor profiles, specialties, and patient booking funnels.
          </p>
          <div className="mt-8">
            <Button>Book Appointment</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# 4. App: Admin (Vite + React)

## `/apps/admin/package.json`

```json
{
  "name": "@ruby/admin",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "typecheck": "tsc --project tsconfig.json --noEmit",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@ruby/api-client": "workspace:*",
    "@ruby/types": "workspace:*",
    "@ruby/ui": "workspace:*",
    "axios": "^1.11.0",
    "lucide-react": "^0.542.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.14.1",
    "zustand": "^5.0.7"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.12",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react-swc": "^4.0.1",
    "rimraf": "^6.0.1",
    "tailwindcss": "4.2.2",
    "typescript": "^5.8.3",
    "vite": "^7.1.3"
  }
}
```

## `/apps/admin/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.tsbuildinfo"
  },
  "include": ["src"]
}
```

## `/apps/admin/vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
});
```

## `/apps/admin/postcss.config.mjs`

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

## `/apps/admin/src/index.css`

```css
@import "tailwindcss";

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}
```

## `/apps/admin/src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## `/apps/admin/src/App.tsx`

```tsx
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@ruby/ui/button";

function Dashboard() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-[-0.03em]">Admin Dashboard</h1>
      <p className="text-slate-600">
        Manage doctors, specialties, homepage content, and booking requests here.
      </p>
      <Button>Review Bookings</Button>
    </section>
  );
}

function Doctors() {
  return <h2 className="text-2xl font-semibold">Doctors</h2>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Ruby Admin
          </p>
          <nav className="mt-8 space-y-3 text-sm">
            <Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" to="/">
              Dashboard
            </Link>
            <Link className="block rounded-xl px-3 py-2 hover:bg-slate-100" to="/doctors">
              Doctors
            </Link>
          </nav>
        </aside>

        <main className="p-6 lg:p-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
```

---

# 5. App: API Placeholder

Use Express or NestJS later. For the monorepo scaffold, start with a minimal Node app.

## `/apps/api/package.json`

```json
{
  "name": "@ruby/api",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc --project tsconfig.json",
    "start": "node dist/index.js",
    "typecheck": "tsc --project tsconfig.json --noEmit",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.3",
    "rimraf": "^6.0.1",
    "tsx": "^4.20.5",
    "typescript": "^5.8.3"
  }
}
```

## `/apps/api/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "noEmit": false,
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  },
  "include": ["src"]
}
```

## `/apps/api/src/index.ts`

```ts
import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "ruby-api",
  });
});

app.get("/api/v1/homepage", (_req, res) => {
  res.json({
    headline: "Get the right care with speed, clarity, and confidence.",
    subtext: "This payload will later power the real homepage.",
  });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
```

---

# 6. Shared Package: UI

## `/packages/ui/package.json`

```json
{
  "name": "@ruby/ui",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "react": "^19.1.1"
  },
  "devDependencies": {
    "@types/react": "^19.1.10",
    "typescript": "^5.8.3"
  }
}
```

## `/packages/ui/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src"
  },
  "include": ["src"]
}
```

## `/packages/ui/src/button.tsx`

```tsx
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-slate-950 text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50";

  return <button className={`${base} ${styles} ${className}`.trim()} {...props} />;
}
```

## `/packages/ui/src/index.ts`

```ts
export * from "./button";
```

---

# 7. Shared Package: Types

## `/packages/types/package.json`

```json
{
  "name": "@ruby/types",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "devDependencies": {
    "typescript": "^5.8.3"
  }
}
```

## `/packages/types/src/homepage.ts`

```ts
export type HomepageStat = {
  value: string;
  label: string;
};

export type HomepagePayload = {
  headline: string;
  subtext: string;
  stats?: HomepageStat[];
};
```

## `/packages/types/src/doctor.ts`

```ts
export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  availability: string;
};
```

## `/packages/types/src/index.ts`

```ts
export * from "./homepage";
export * from "./doctor";
```

---

# 8. Shared Package: API Client

## `/packages/api-client/package.json`

```json
{
  "name": "@ruby/api-client",
  "version": "0.0.0",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "dependencies": {
    "@ruby/types": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.8.3"
  }
}
```

## `/packages/api-client/src/homepage.ts`

```ts
import type { HomepagePayload } from "@ruby/types/homepage";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api/v1";

export async function getHomepage(): Promise<HomepagePayload> {
  const response = await fetch(`${API_BASE_URL}/homepage`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch homepage payload");
  }

  return response.json();
}
```

## `/packages/api-client/src/index.ts`

```ts
export * from "./homepage";
```

---

# 9. Shared Package: Config

## `/packages/config/package.json`

```json
{
  "name": "@ruby/config",
  "version": "0.0.0",
  "private": true,
  "main": "tailwind.ts",
  "types": "tailwind.ts",
  "devDependencies": {
    "typescript": "^5.8.3"
  }
}
```

## `/packages/config/tailwind.ts`

```ts
export const brandColors = {
  primary: "#0f766e",
  primaryDark: "#0b3a39",
  surface: "#f8fafc",
  ink: "#0f172a",
};
```

---

# 10. Environment Files

## `/apps/web/.env.example`

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1
```

## `/apps/admin/.env.example`

```env
VITE_API_BASE_URL=http://localhost:3001/api/v1
```

## `/apps/api/.env.example`

```env
PORT=3001
```

---

# 11. Installation and Bootstrap

## Create the repo

```bash
mkdir ruby-hospital && cd ruby-hospital
pnpm init
```

## Install root tools

```bash
pnpm add -D turbo typescript rimraf @types/node
```

## Run development

```bash
pnpm install
pnpm dev
```

This should run:

* Next.js public app
* Vite admin app
* API app

---

# 12. Recommended Next Engineering Step

After this base scaffold, build in this order:

1. move the Ruby Hospital homepage into `apps/web/src/app/page.tsx`
2. split sections into `apps/web/src/components/homepage/*`
3. wire homepage data to `@ruby/api-client`
4. build admin pages for:

   * doctors
   * specialties
   * homepage content
   * booking requests
5. replace Express placeholder API with NestJS if you want enterprise backend structure

---

# 13. Strong Production Direction

For this hospital platform, the correct monorepo architecture is:

* **Next.js** for public-facing trust, SEO, and booking UX
* **Vite** for internal admin speed and dashboard interactivity
* **shared packages** for consistency across the system
* **Turborepo** to keep the full platform scalable

This is the right foundation for a serious healthcare web system.

---

# 14. Locked Frontend Stack (Effective April 17, 2026)

Use this version-locked stack for all new setup and dependency updates in this repository:

* **Next.js**: `16.2.4`
* **React**: `19`
* **TypeScript**
* **Tailwind CSS**: `4.2.2` (stable release published **March 18, 2026**)
* **Framer Motion**
* **Lucide React**
* **React Router**: `7.14.1` (current stable)
* **React Hook Form + Zod**
