/**
 * API configuration for Ruby Hospital Kampala
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const API_VERSION = "v1";

const API_ENDPOINTS = {
  // Public content endpoints
  HOMEPAGE: `${API_BASE_URL}/${API_VERSION}/homepage`,
  DOCTORS: `${API_BASE_URL}/${API_VERSION}/doctors`,
  DOCTOR_BY_SLUG: (slug: string) => `${API_BASE_URL}/${API_VERSION}/doctors/${slug}`,
  SPECIALTIES: `${API_BASE_URL}/${API_VERSION}/specialties`,
  SPECIALTY_BY_SLUG: (slug: string) => `${API_BASE_URL}/${API_VERSION}/specialties/${slug}`,
  FAQS: `${API_BASE_URL}/${API_VERSION}/faqs`,
  TESTIMONIALS: `${API_BASE_URL}/${API_VERSION}/testimonials`,
  
  // Appointment flow endpoints
  APPOINTMENT_INQUIRIES: `${API_BASE_URL}/${API_VERSION}/appointments/inquiries/public`,
  APPOINTMENT_BOOKINGS: `${API_BASE_URL}/${API_VERSION}/appointments/bookings/public`,
  DOCTOR_AVAILABILITY: (doctorId: string, date: string) =>
    `${API_BASE_URL}/${API_VERSION}/doctors/availability?doctorId=${doctorId}&date=${date}`,
  
  // Admin endpoints
  ADMIN_APPOINTMENTS: `${API_BASE_URL}/${API_VERSION}/admin/appointments`,
  ADMIN_APPOINTMENT_STATUS: (id: string) =>
    `${API_BASE_URL}/${API_VERSION}/admin/appointments/${id}/status`,
  ADMIN_HOMEPAGE: `${API_BASE_URL}/${API_VERSION}/admin/homepage`,
} as const;

export default API_ENDPOINTS;
