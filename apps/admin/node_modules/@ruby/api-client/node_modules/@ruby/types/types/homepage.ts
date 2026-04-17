/**
 * Homepage types - Shared between frontend and backend
 */

export interface HomepageStat {
  value: string;
  label: string;
}

export interface HomepageQuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface HomepageSpecialty {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface HomepageDoctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  available: boolean;
  experience: string;
  slug: string;
}

export interface HomepageTestimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  image: string;
}

export interface HomepageFaq {
  id: string;
  question: string;
  answer: string;
}

export interface HomepagePayload {
  stats: HomepageStat[];
  quickActions: HomepageQuickAction[];
  specialties: HomepageSpecialty[];
  doctors: HomepageDoctor[];
  testimonials: HomepageTestimonial[];
  faqs: HomepageFaq[];
}
