import { Injectable } from '@nestjs/common';
import type { FAQList } from '@ruby/types';

@Injectable()
export class FaqsService {
  async findAll(): Promise<FAQList> {
    // TODO: Fetch from database
    return {
      faqs: [],
      total: 0,
    };
  }
}
