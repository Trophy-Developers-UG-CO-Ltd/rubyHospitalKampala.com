import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock3 } from "lucide-react";

const footerColumns = [
  {
    title: "About us",
    links: ["About us", "Services", "Blogs", "Doctors", "Appointments", "Pricing"],
  },
  {
    title: "Care pathways",
    links: ["Departments", "Health Packages", "Maternity Packages", "Homecare", "International Patients", "Insurance"],
  },
  {
    title: "Patients & visitors",
    links: ["Patients & Visitors", "Quality & Safety", "Educational Activities", "Careers", "Promotion / Offers", "Contact"],
  },
];

const socials = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

function slugify(value: string) {
  return value.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s*\/\s*/g, "-").replace(/\s+/g, "-");
}

export default function Footer() {
  return (
    <footer className="bg-[#101114] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr] xl:px-8">
        <div>
          <Link href="/en" className="inline-flex items-center" aria-label="Ruby Hospital Kampala home">
            <Image src="/logo.svg" alt="Ruby Hospital Kampala" width={240} height={82} className="h-14 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
            Ruby Hospital Kampala provides specialist healthcare in Uganda with advanced diagnostics, surgery, emergency care, maternity support, rehabilitation, and responsive patient-centered treatment.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/72">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-red-400" />
              Plot 40 Lugogo By Pass
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-red-400" />
              info@rubyhospitalkampala.com
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-red-400" />
              +(256) 800-388111
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="h-4 w-4 text-red-400" />
              Open 24 Hours, Monday to Sunday
            </div>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((item) => (
                <li key={item}>
                  <Link href={`/en/${slugify(item)}` as Route} className="text-sm text-white/72 transition hover:text-red-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between xl:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-white/10 text-white/72 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

          <p className="text-sm text-white/60">© {new Date().getFullYear()} Ruby Hospital Kampala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
