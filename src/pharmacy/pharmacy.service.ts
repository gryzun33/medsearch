import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Pharmacy } from '@prisma/client';
import { Pharmacy as PharmacyEntity } from './entities/pharmacy.entity';

@Injectable()
export class PharmacyService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<PharmacyEntity[] | null> {
    const pharmacies = await this.prisma.pharmacy.findMany();
    return pharmacies.map((item: Pharmacy) => ({
      id: item.id,
      name: item.name,
      address: item.address,
      position: [item.latitude, item.longitude],
      hours: item.hours,
    }));
  }

  async getById(id: string): Promise<PharmacyEntity | null> {
    const pharmacy = await this.prisma.pharmacy.findUnique({ where: { id } });

    if (!pharmacy) {
      throw new NotFoundException(`Pharmacy not found`);
    }

    return {
      id: pharmacy.id,
      name: pharmacy.name,
      address: pharmacy.address,
      position: [pharmacy.latitude, pharmacy.longitude],
      hours: pharmacy.hours,
    };
  }
}
