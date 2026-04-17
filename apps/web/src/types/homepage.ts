export type HomepageStat = {
  value: string;
  label: string;
};

export type HomepageQuickAction = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type HomepageSpecialty = {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
};

export type HomepageDoctor = {
  id: string;
  name: string;
  title: string;
  image: string;
  experience: string;
  availability: string;
  href: string;
};

export type HomepageTestimonial = {
  quote: string;
  name: string;
};

export type HomepageFaq = {
  question: string;
  answer: string;
};

export type HomepagePayload = {
  eyebrow: string;
  headline: string;
  subtext: string;
  stats: HomepageStat[];
  quickActions: HomepageQuickAction[];
  specialties: HomepageSpecialty[];
  featuredDoctors: HomepageDoctor[];
  testimonials: HomepageTestimonial[];
  faqs: HomepageFaq[];
};
