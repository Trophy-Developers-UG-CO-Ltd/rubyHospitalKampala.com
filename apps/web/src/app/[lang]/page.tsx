import Header from "@/components/shared/public/Header";
import HomepageBody from "@/components/shared/public/HomepageBody";
import Footer from "@/components/shared/public/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruby Hospital Kampala | Specialist Hospital in Kampala, Uganda",
  description:
    "Ruby Hospital Kampala offers specialist healthcare in Uganda including diagnostics, surgery, emergency care, orthopaedics, neurology, urology, paediatrics, maternity care, and rehabilitation.",
  keywords: [
    "Ruby Hospital Kampala",
    "hospital in Kampala",
    "specialist hospital in Uganda",
    "doctors in Kampala",
    "neurosurgeon in Uganda",
    "urologist in Kampala",
    "orthopaedic doctor in Uganda",
    "paediatric specialist in Kampala",
    "diagnostics and imaging in Kampala",
    "emergency care in Kampala",
    "maternity hospital in Kampala",
    "book hospital appointment in Uganda",
  ],
  openGraph: {
    title: "Ruby Hospital Kampala | Specialist Hospital in Kampala, Uganda",
    description:
      "Specialist hospital care in Kampala with advanced diagnostics, surgery, emergency treatment, maternity support, rehabilitation, and expert doctors.",
    url: "https://rubyhospitalkampala.com/en",
    siteName: "Ruby Hospital Kampala",
    type: "website",
    locale: "en_UG",
  },
  alternates: {
    canonical: "https://rubyhospitalkampala.com/en",
  },
};

const hospitalSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Ruby Hospital Kampala",
  url: "https://rubyhospitalkampala.com/en",
  telephone: "+256800388111",
  email: "info@rubyhospitalkampala.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 40 Lugogo By Pass",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  openingHours: "Mo-Su 00:00-23:59",
  medicalSpecialty: [
    "Neurosurgery",
    "Orthopedic",
    "Urology",
    "Pediatrics",
    "Cardiovascular",
    "Gynecologic",
    "Emergency",
    "Diagnostic",
  ],
};

export default function RubyHospitalKampalaHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
      />
      <div className="relative min-h-screen bg-background text-foreground">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_58%)]" />
        <Header />
        <HomepageBody />
        <Footer />
      </div>
    </>
  );
}
