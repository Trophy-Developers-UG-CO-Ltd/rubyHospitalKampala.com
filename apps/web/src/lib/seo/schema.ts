/**
 * JSON-LD Schema generators for SEO
 */

export function generateHospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Ruby Hospital Kampala",
    description: "Trusted healthcare in Kampala with experienced specialists",
    url: "https://rubyhospital.ug",
    telephone: "+256700000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kampala",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generatePhysicianSchema(doctor: {
  name: string;
  title: string;
  image: string;
  experience: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    jobTitle: doctor.title,
    image: doctor.image,
    description: `${doctor.experience} of medical experience`,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
