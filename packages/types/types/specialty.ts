/**
 * Specialty types - Shared between frontend and backend
 */

export interface Specialty {
  id: string;
  name: string;
  description: string;
  image: string;
  doctors?: string[];
  slug: string;
}

export interface SpecialtiesList {
  specialties: Specialty[];
  total: number;
}
