import { Controller, Get, Param } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { Pharmacy } from './entities/pharmacy.entity';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  async getAll(): Promise<Pharmacy[] | null> {
    return this.pharmacyService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Pharmacy | null> {
    return this.pharmacyService.getById(id);
  }
}
