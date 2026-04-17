import { Injectable } from '@nestjs/common';
import type { AppointmentInquiry } from '@ruby/types';

@Injectable()
export class AppointmentsService {
  async createInquiry(inquiryDto: AppointmentInquiry) {
    // TODO: Save to database and send email notification
    return { success: true, message: 'Inquiry received' };
  }

  async findAll() {
    // TODO: Fetch from database
    return { appointments: [], total: 0 };
  }
}
