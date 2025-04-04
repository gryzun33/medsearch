import { PrismaClient } from '@prisma/client';
import pharmacies from './data/pharmacies.json';
import medicines from './data/medicines.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.medicine.createMany({
    data: medicines,
  });

  for (const pharmacy of pharmacies) {
    await prisma.pharmacy.create({
      data: {
        name: pharmacy.name,
        address: pharmacy.address,
        latitude: pharmacy.position[0],
        longitude: pharmacy.position[1],
        hours: pharmacy.hours,
      },
    });
  }

  const allPharmacies = await prisma.pharmacy.findMany();
  const allMedicines = await prisma.medicine.findMany();

  for (const pharmacy of allPharmacies) {
    const randomMedicines = allMedicines
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * allMedicines.length) + 1);
    for (const medicine of randomMedicines) {
      const existingStock = await prisma.stock.findFirst({
        where: {
          pharmacyId: pharmacy.id,
          medicineId: medicine.id,
        },
      });

      if (!existingStock) {
        await prisma.stock.create({
          data: {
            pharmacyId: pharmacy.id,
            medicineId: medicine.id,
            price: parseFloat((Math.random() * (100 - 5) + 5).toFixed(2)),
            quantity: Math.floor(Math.random() * 50) + 1,
          },
        });
      }
    }
  }
  console.log('Many-to-many links generated.');

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
