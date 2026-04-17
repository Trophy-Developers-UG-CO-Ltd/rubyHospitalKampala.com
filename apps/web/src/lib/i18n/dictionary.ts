/**
 * Translation dictionaries for Ruby Hospital Kampala
 * This is a placeholder structure - add your actual translations
 */

export const dictionary = {
  en: {
    common: {
      hospital: "Ruby Hospital Kampala",
      tagline: "Care with clarity and confidence",
      bookAppointment: "Book Appointment",
      findDoctor: "Find a Doctor",
      callHospital: "Call Hospital",
      emergencySupport: "Emergency support: Fast access to urgent care guidance and hospital contact routes.",
    },
    nav: {
      doctors: "Doctors",
      specialties: "Specialties",
      internationalPatients: "International Patients",
      about: "About",
      contact: "Contact",
      emergency: "Emergency",
      appointments: "Appointments",
      patientGuide: "Patient Guide",
    },
    home: {
      hero: {
        eyebrow: "Trusted care. Faster decisions. Better patient journeys.",
        headline: "Get the right care with speed, clarity, and confidence.",
        subtext:
          "Discover doctors, explore specialties, and book appointments through a streamlined hospital experience built for patient trust and fast action.",
      },
    },
  },
  lg: {
    common: {
      hospital: "Ruby Hospital Kampala",
      tagline: "Kulumya n'okwetegeza",
    },
  },
  sw: {
    common: {
      hospital: "Ruby Hospital Kampala",
      tagline: "Huduma na wazi na imani",
    },
  },
} as const;

export function getDictionary(lang: string) {
  return dictionary[lang as keyof typeof dictionary] || dictionary.en;
}
