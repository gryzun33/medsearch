import { PrismaClient } from '@prisma/client';
import pharmacies from './data/pharmacies.json';
import medicines from './data/medicines.json';
// console.log('pharmacies=', pharmacies);

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
    // Определяем случайное количество связей для каждой аптеки
    const randomMedicines = allMedicines
      .sort(() => 0.5 - Math.random()) // случайный порядок
      .slice(0, Math.floor(Math.random() * allMedicines.length) + 1); // случайное количество

    for (const medicine of randomMedicines) {
      await prisma.stock.create({
        data: {
          pharmacyId: pharmacy.id,
          medicineId: medicine.id,
          price: parseFloat((Math.random() * (100 - 5) + 5).toFixed(2)), // случайная цена
          quantity: Math.floor(Math.random() * 50) + 1, // случайное количество
        },
      });
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
