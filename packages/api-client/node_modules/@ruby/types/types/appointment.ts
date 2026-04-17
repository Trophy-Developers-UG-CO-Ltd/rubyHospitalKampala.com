/**
 * Appointment types - Shared between frontend and backend
 */

export interface AppointmentInquiry {
  patientName: string;
  email: string;
  phone: string;
  specialty?: string;
  doctor?: string;
  preferredDate?: string;
  message?: string;
}

export interface AppointmentBooking extends AppointmentInquiry {
  appointmentType: 'consultation' | 'follow-up' | 'procedure';
}

export interface AppointmentConfirmation {
  id: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  confirmationCode: string;
  appointmentDate: string;
  doctor: string;
  specialty: string;
}
