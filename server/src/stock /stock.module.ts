import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { StockService } from './stock.service';

@Module({
  providers: [StockService, PrismaService],
  exports: [StockService],
})
export class StockModule {}
