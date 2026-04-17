/**
 * Doctor types - Shared between frontend and backend
 */

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  image: string;
  available: boolean;
  experience: string;
  slug: string;
  email?: string;
  phone?: string;
  qualifications?: string[];
  availableHours?: string;
}

export interface DoctorsList {
  doctors: Doctor[];
  total: number;
}
