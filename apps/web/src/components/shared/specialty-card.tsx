"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface SpecialtyCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
}

export function SpecialtyCard({
  name,
  description,
  image,
  href,
}: SpecialtyCardProps) {
  return (
    <a
      href={href}
      className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
    >
      <div className="aspect-[4/4.2] overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">{name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <div className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900">
          Explore care
          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
