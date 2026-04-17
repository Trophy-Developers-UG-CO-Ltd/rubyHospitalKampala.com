/**
 * FAQ types - Shared between frontend and backend
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
}

export interface FAQList {
  faqs: FAQ[];
  total: number;
}
