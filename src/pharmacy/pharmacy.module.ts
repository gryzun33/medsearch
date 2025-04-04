import { Module } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [PharmacyService, PrismaService],
  controllers: [PharmacyController],
})
export class PharmacyModule {}
