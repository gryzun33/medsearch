import { Medicine } from '@prisma/client';
import { Stock } from '@prisma/client';
import { Pharmacy } from '@prisma/client';

export type MedicineSearchResponse = Medicine & {
  pharmaciesCount: number;
  minPrice: number;
  maxPrice: number;
};

export type MedicineWithPharmacies = Medicine & {
  pharmacies: (Stock & {
    pharmacy: Pharmacy;
  })[];
};
