"use client";

import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { Phone, Search, Globe2, ChevronDown, CalendarDays, UserRound } from "lucide-react";
import { useState } from "react";

const primaryNav = [
  "Departments",
  "Packages",
  "Homecare",
  "E-Services",
  "Doctors",
];

function slugify(value: string) {
  return value.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s*\/\s*/g, "-").replace(/\s+/g, "-");
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/96 backdrop-blur-xl">
      <div className="hidden border-b border-slate-200 bg-slate-50 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-slate-600 xl:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 font-medium text-slate-700">
              <Phone className="h-3.5 w-3.5" />
              +(256) 800-388111
            </span>
            <a href="mailto:info@rubyhospitalkampala.com" className="hover:text-red-600">
              info@rubyhospitalkampala.com
            </a>
            <span>Plot 40 Lugogo By Pass</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/en/international-patients" className="hover:text-red-600">
              International Patients
            </Link>
            <Link href={"/en/insurance" as Route} className="hover:text-red-600">
              Insurance Partners
            </Link>
            <button className="inline-flex items-center gap-1 hover:text-red-600">
              <Globe2 className="h-3.5 w-3.5" /> EN <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 xl:px-8">
        <Link href="/en" className="flex shrink-0 items-center gap-3" aria-label="Ruby Hospital Kampala home">
          <Image
            src="/logo.svg"
            alt="Ruby Hospital Kampala"
            width={240}
            height={82}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <ul className="flex min-w-0 items-center gap-1 overflow-x-auto">
            {primaryNav.map((item) => (
              <li key={item}>
                <Link
                  href={`/en/${slugify(item)}` as Route}
                  className="inline-flex rounded-[4px] px-3 py-2 text-[13px] font-medium text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button className="inline-flex items-center rounded-[4px] px-3 py-2 text-[13px] font-medium text-slate-700 transition hover:bg-red-50 hover:text-red-600">
                More <ChevronDown className="ml-1 h-3.5 w-3.5" />
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            aria-label="Search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <Link
            href={"/en#home-booking-strip" as Route}
            className="inline-flex items-center gap-2 rounded-[4px] bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <CalendarDays className="h-4 w-4" />
            Book Appointment
          </Link>
        </div>

        <div className="inline-flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            aria-label="Language"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-slate-200 text-slate-700"
          >
            <Globe2 className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-slate-200 text-slate-700"
          >
            <UserRound className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 items-center justify-center rounded-[4px] border border-slate-200 px-3 text-[13px] font-semibold tracking-[0.08em] text-slate-700"
          >
            MENU
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {primaryNav.map((item) => (
              <Link key={item} href={`/en/${slugify(item)}` as Route} className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                {item}
              </Link>
            ))}
            <Link
              href={"/en#home-booking-strip" as Route}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
