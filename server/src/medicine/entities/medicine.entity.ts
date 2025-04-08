import { Medicine } from '@prisma/client';

export type MedicineSearchResponse = Medicine & {
  pharmaciesCount: number;
  minPrice: number;
  maxPrice: number;
};
