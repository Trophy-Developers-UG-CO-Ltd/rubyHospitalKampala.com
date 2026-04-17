export type Doctor = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
  experience: string;
  qualifications: string[];
  bio: string;
  availability: string;
  languages: string[];
  href: string;
};

export type DoctorsList = {
  doctors: Doctor[];
  total: number;
};
