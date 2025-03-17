import { Controller, Get, Param } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  async getAll() {
    return this.pharmacyService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.pharmacyService.getById(id);
  }
}
