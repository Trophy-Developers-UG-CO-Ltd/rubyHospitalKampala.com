export type Specialty = {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  icon?: string;
  href: string;
  doctorCount?: number;
};

export type SpecialtiesList = {
  specialties: Specialty[];
  total: number;
};
