import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateMedicineDto } from './dto/create-medicine.dto';
// import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  async create(createMedicineDto: CreateMedicineDto) {
    return this.prisma.medicine.create({
      data: createMedicineDto,
    });
  }

  async findAll() {
    return this.prisma.medicine.findMany();
  }

  async findOne(id: string) {
    return this.prisma.medicine.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto) {
    return this.prisma.medicine.update({
      where: { id },
      data: updateMedicineDto,
    });
  }

  async remove(id: string) {
    return this.prisma.medicine.delete({
      where: { id },
    });
  }
}
