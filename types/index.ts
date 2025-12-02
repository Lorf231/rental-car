// types/index.ts
export interface Car {
  id: number | string;
  make: string;
  model: string;
  year: number;
  rentalPrice: number;
  address: string;
  rentalCompany: string;
  type: string;
  mileage: number;
  img?: string;
}

export interface FilterOptions {
  selectedBrand: string;
  selectedPrice: string;
  milesFrom: number | string;
  milesTo: number | string;
}