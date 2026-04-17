import type { Metadata } from "next";
import { isValidLanguage } from "@/lib/i18n/config";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "lg" }, { lang: "sw" }];
}

export const metadata: Metadata = {
  title: "Ruby Hospital Kampala | Trusted Healthcare",
  description:
    "Find doctors, explore specialties, and book appointments with confidence at Ruby Hospital Kampala.",
};

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  // Validate language
  if (!isValidLanguage(lang)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Language not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {children}
    </div>
  );
}
