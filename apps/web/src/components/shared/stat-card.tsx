"use client";

import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  variant?: "light" | "dark";
}

export function StatCard({ value, label, variant = "light" }: StatCardProps) {
  const baseClasses = "rounded-3xl border p-4";
  const variantClasses = {
    light: "border-slate-200 bg-slate-50",
    dark: "border-white/10 bg-white/5 text-white",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <p className="text-2xl font-semibold tracking-[-0.03em]">{value}</p>
      <p className={`mt-1 text-sm ${variant === "dark" ? "text-white/70" : "text-slate-700"}`}>
        {label}
      </p>
    </div>
  );
}
