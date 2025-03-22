import { PrismaClient } from '@prisma/client';
import pharmacies from './data/pharmacies.json';
import medicines from './data/medicines.json';
console.log('pharmacies=', pharmacies);

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

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

  for (const medicine of medicines) {
    await prisma.medicine.create({
      data: {
        name: medicine.name,
        type: medicine.type,
        dosage: medicine.dosage,
        volume: medicine.volume,
      },
    });
  }

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
