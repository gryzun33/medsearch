export type Medicine = {
  id: string;
  name: string;
  type: string;
  dosage: string;
  volume: string;
};

export type MedicineSearchResponse = Medicine & {
  pharmaciesCount: number;
  minPrice: number;
  maxPrice: number;
};
