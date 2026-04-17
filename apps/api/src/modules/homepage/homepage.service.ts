import { Injectable } from '@nestjs/common';
import type { HomepagePayload } from '@ruby/types';

@Injectable()
export class HomepageService {
  async getHomepage(): Promise<HomepagePayload> {
    // TODO: Fetch from database and format response
    return {
      stats: [
        { value: '500+', label: 'Patients Served Daily' },
        { value: '50+', label: 'Expert Specialists' },
        { value: '24/7', label: 'Emergency Support' },
        { value: '15+', label: 'Years Experience' },
      ],
      quickActions: [],
      specialties: [],
      doctors: [],
      testimonials: [],
      faqs: [],
    };
  }
}
