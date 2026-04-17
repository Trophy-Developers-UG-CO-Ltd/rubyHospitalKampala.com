import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1680000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Migration code here
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Rollback code here
  }
}
