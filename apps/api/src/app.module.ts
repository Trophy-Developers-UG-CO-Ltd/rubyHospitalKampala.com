import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageModule } from './modules/homepage/homepage.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { SpecialtiesModule } from './modules/specialties/specialties.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { FaqsModule } from './modules/faqs/faqs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'ruby_hospital',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    HomepageModule,
    DoctorsModule,
    SpecialtiesModule,
    AppointmentsModule,
    FaqsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
