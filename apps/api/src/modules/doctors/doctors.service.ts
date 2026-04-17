import { Injectable } from '@nestjs/common';
import type { Doctor, DoctorsList } from '@ruby/types';

@Injectable()
export class DoctorsService {
  async findAll(): Promise<DoctorsList> {
    // TODO: Fetch from database
    return {
      doctors: [],
      total: 0,
    };
  }

  async findBySlug(slug: string): Promise<Doctor | null> {
    // TODO: Fetch from database
    return null;
  }
}
