"use client";

import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export function Select({
  label,
  error,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm font-medium text-white/70">{label}</span>}
      <select
        className={`h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#0e1a1c] px-4 text-base text-white outline-none transition focus:border-teal-300/40 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 block text-sm text-red-400">{error}</span>}
    </label>
  );
}
