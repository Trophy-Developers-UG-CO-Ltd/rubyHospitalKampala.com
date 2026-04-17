export type AppointmentInquiry = {
  specialty: string;
  doctor?: string;
  preferredDate?: string;
  phone: string;
  email?: string;
  notes?: string;
};

export type AppointmentBooking = {
  doctorId: string;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  specialty: string;
};

export type AppointmentConfirmation = {
  id: string;
  status: "pending" | "confirmed" | "cancelled";
  nextSteps: string;
  contactInfo: string;
};
