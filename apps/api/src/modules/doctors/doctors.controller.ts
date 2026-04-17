import { Controller, Get, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('api/v1/doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  getDoctors() {
    return this.doctorsService.findAll();
  }

  @Get(':slug')
  getDoctorBySlug(@Param('slug') slug: string) {
    return this.doctorsService.findBySlug(slug);
  }
}
