import { Controller, Get, Param } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';

@Controller('api/v1/specialties')
export class SpecialtiesController {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Get()
  getSpecialties() {
    return this.specialtiesService.findAll();
  }

  @Get(':slug')
  getSpecialtyBySlug(@Param('slug') slug: string) {
    return this.specialtiesService.findBySlug(slug);
  }
}
