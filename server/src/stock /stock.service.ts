import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class StockService {
  constructor(private readonly prisma: PrismaService) {}

  async getStockByMedicineId(medicineId: string) {
    return this.prisma.stock.findMany({
      where: {
        medicineId: medicineId,
      },
      include: {
        pharmacy: true,
      },
    });
  }

  async getMedicineWithStock(medicineId: string) {
    const medicine = await this.prisma.medicine.findUnique({
      where: {
        id: medicineId,
      },
      include: {
        pharmacies: {
          include: {
            pharmacy: true,
          },
        },
      },
    });

    if (!medicine) {
      return null;
    }

    const stocks = await this.getStockByMedicineId(medicineId);

    medicine.pharmacies.forEach((pharmacyStock) => {
      const stock = stocks.find(
        (s) => s.pharmacyId === pharmacyStock.pharmacy.id,
      );
      if (stock) {
        pharmacyStock.price = stock.price;
        pharmacyStock.quantity = stock.quantity;
      }
    });

    return medicine;
  }
}
