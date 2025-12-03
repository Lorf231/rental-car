export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export interface FilterOptions {
  brand?: string;
  price?: string;
  mileageFrom?: number | "";
  mileageTo?: number | "";
  page?: number;  // <-- Додали
  limit?: number; // <-- Додали (за бажанням, зазвичай 8 або 12)
}

export interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}