import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import type { AppointmentInquiry } from '@ruby/types';

@Controller('api/v1/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post('inquire')
  inquire(@Body() inquiryDto: AppointmentInquiry) {
    return this.appointmentsService.createInquiry(inquiryDto);
  }

  @Get()
  getAppointments() {
    return this.appointmentsService.findAll();
  }
}
