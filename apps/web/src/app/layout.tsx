import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruby Hospital Kampala | Trusted Healthcare",
  description:
    "Find doctors, explore specialties, and book appointments with confidence at Ruby Hospital Kampala.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-950">{children}</body>
    </html>
  );
}
