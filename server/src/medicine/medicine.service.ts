import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateMedicineDto } from './dto/create-medicine.dto';
// import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { StockService } from 'src/stock /stock.service';
import {
  MedicineSearchResponse,
  MedicineWithPharmacies,
} from './entities/medicine.entity';

@Injectable()
export class MedicineService {
  constructor(
    private prisma: PrismaService,
    private stockService: StockService,
  ) {}

  async create(createMedicineDto: CreateMedicineDto) {
    return this.prisma.medicine.create({
      data: createMedicineDto,
    });
  }

  async findAll() {
    return this.prisma.medicine.findMany();
  }

  async findOne(id: string) {
    const medicine = await this.prisma.medicine.findUnique({
      where: {
        id: id,
      },
    });

    return medicine;
  }

  async findOneWithPharmacies(
    id: string,
    order: 'asc' | 'desc' = 'asc',
  ): Promise<MedicineWithPharmacies | null> {
    const medicine = await this.prisma.medicine.findUnique({
      where: {
        id: id,
      },
      include: {
        pharmacies: {
          orderBy: {
            price: order,
          },
          include: {
            pharmacy: true,
          },
        },
      },
    });

    if (!medicine) return null;

    const pharmacies = medicine.pharmacies.map((item) => ({
      id: item.pharmacy.id,
      name: item.pharmacy.name,
      address: item.pharmacy.address,
      position: [item.pharmacy.latitude, item.pharmacy.longitude] as [
        number,
        number,
      ],
      hours: item.pharmacy.hours,
      price: item.price,
      quantity: item.quantity,
    }));

    const medicineWithPharmacies = {
      pharmacies,
      id: medicine.id,
      name: medicine.name,
      type: medicine.type,
      dosage: medicine.dosage,
      volume: medicine.volume,
    };

    return medicineWithPharmacies;
  }

  async getMedicinesByName(
    searchText: string,
  ): Promise<MedicineSearchResponse[] | null> {
    const medicines = await this.prisma.medicine.findMany({
      where: {
        name: {
          contains: searchText,
          // mode: 'insensitive',
        },
      },
      include: {
        pharmacies: true,
      },
    });

    if (medicines.length === 0) {
      return null;
    }

    const medicinesSearch = medicines.map((medicine) => {
      const pharmacies = medicine.pharmacies;
      const prices = pharmacies.map((el) => el.price);

      const medicineResult = {
        id: medicine.id,
        name: medicine.name,
        type: medicine.type,
        dosage: medicine.dosage,
        volume: medicine.volume,
        pharmaciesCount: pharmacies.length,
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices),
      };

      return medicineResult;
    });

    console.log('resultsearch=', medicinesSearch);

    return medicinesSearch;
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
