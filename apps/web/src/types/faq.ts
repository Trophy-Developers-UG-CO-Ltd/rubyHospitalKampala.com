export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type FAQList = {
  faqs: FAQ[];
  total: number;
};
