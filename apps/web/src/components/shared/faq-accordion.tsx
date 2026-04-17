"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
  variant?: "light" | "dark";
  defaultOpenIndex?: number;
}

export function FAQAccordion({
  items,
  variant = "light",
  defaultOpenIndex = 0,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  const baseClasses = "overflow-hidden rounded-[28px] border";
  const variantClasses = {
    light: "border-slate-200 bg-white",
    dark: "border-white/10 bg-white/5 text-white",
  };

  const buttonClasses = {
    light: "text-slate-950",
    dark: "text-white",
  };

  const contentClasses = {
    light: "text-slate-700",
    dark: "text-white/72",
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <motion.div
            key={item.question}
            className={`${baseClasses} ${variantClasses[variant]}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className={`text-lg font-semibold tracking-[-0.02em] ${buttonClasses[variant]}`}>
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 transition",
                  isOpen && "rotate-180",
                  variant === "dark" ? "text-teal-200" : "text-teal-700"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <div className={`px-6 pb-6 text-sm leading-7 sm:px-7 ${contentClasses[variant]}`}>
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
