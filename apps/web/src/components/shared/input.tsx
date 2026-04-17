"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm font-medium text-white/70">{label}</span>}
      <input
        className={`h-14 w-full rounded-2xl border border-white/10 bg-[#0e1a1c] px-4 text-base text-white outline-none transition focus:border-teal-300/40 placeholder:text-white/30 ${className}`}
        {...props}
      />
      {error && <span className="mt-1 block text-sm text-red-400">{error}</span>}
    </label>
  );
}
