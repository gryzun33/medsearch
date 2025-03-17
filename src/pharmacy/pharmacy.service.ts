import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class PharmacyService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.pharmacy.findMany();
  }

  async getById(id: string) {
    return this.prisma.pharmacy.findUnique({ where: { id } });
  }
}
