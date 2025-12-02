"use client";

import { Car } from "@/types/index";
import CarCard from "./CarCard";

interface CarGridProps {
  cars: Car[];
  isLoading: boolean;
}

const CarGrid = ({ cars, isLoading }: CarGridProps) => {
  if (isLoading) {
    return <div className="text-center py-20 text-gray-500">Loading cars...</div>;
  }

  if (cars.length === 0) {
    return <div className="text-center py-20 text-gray-500">No cars found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12 mb-20">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarGrid;