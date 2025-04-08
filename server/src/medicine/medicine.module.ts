import { Module } from '@nestjs/common';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { StockService } from 'src/stock /stock.service';

@Module({
  controllers: [MedicineController],
  providers: [MedicineService, PrismaService, StockService],
})
export class MedicineModule {}
