import { Injectable } from '@nestjs/common';
import type { Specialty, SpecialtiesList } from '@ruby/types';

@Injectable()
export class SpecialtiesService {
  async findAll(): Promise<SpecialtiesList> {
    // TODO: Fetch from database
    return {
      specialties: [],
      total: 0,
    };
  }

  async findBySlug(slug: string): Promise<Specialty | null> {
    // TODO: Fetch from database
    return null;
  }
}
