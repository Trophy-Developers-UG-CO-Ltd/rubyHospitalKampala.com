"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface DoctorCardProps {
  name: string;
  title: string;
  image: string;
  experience: string;
  availability: string;
  href: string;
  variant?: "light" | "dark";
}

export function DoctorCard({
  name,
  title,
  image,
  experience,
  availability,
  href,
  variant = "light",
}: DoctorCardProps) {
  const baseClasses = "group overflow-hidden rounded-[30px] border transition hover:-translate-y-1";
  const variantClasses = {
    light:
      "border-slate-200 bg-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]",
    dark: "border-white/10 bg-white/5 hover:bg-white/[0.08]",
  };

  const textClasses = {
    light: {
      title: "text-slate-950",
      subtitle: "text-slate-600",
      link: "text-slate-900",
    },
    dark: {
      title: "text-white",
      subtitle: "text-white/72",
      link: "text-white",
    },
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="aspect-[4/4.5] overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-2xl font-semibold tracking-[-0.03em] ${textClasses[variant].title}`}>
          {name}
        </h3>
        <p className={`mt-2 text-base ${textClasses[variant].subtitle}`}>{title}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] ${
            variant === "dark"
              ? "border-white/10 text-teal-100/85"
              : "border-slate-200 text-teal-700"
          }`}>
            {experience}
          </span>
          <span className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] ${
            variant === "dark"
              ? "border-white/10 text-white/75"
              : "border-slate-200 text-slate-600"
          }`}>
            {availability}
          </span>
        </div>
        <div className={`mt-6 inline-flex items-center text-sm font-semibold ${textClasses[variant].link}`}>
          View profile
          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
