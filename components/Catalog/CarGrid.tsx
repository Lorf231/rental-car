"use client";

import { Car } from "@/types";
import CarCard from "./CarCard";

interface CarGridProps {
  cars: Car[];
  isLoading: boolean;
}

const CarGrid = ({ cars, isLoading }: CarGridProps) => {
  
  // 1. СТАН ЗАВАНТАЖЕННЯ
  // Поки дані летять з бекенду, показуємо крутилку
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  // 2. СТАН "ПУСТО"
  // Запит пройшов, помилок немає, але масив пустий (наприклад, такий фільтр)
  if (!cars || cars.length === 0) {
    return (
      <div className="w-full text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Oops, no cars found</h2>
        <p className="text-gray-500 mt-2">Try changing your filters to see results.</p>
      </div>
    );
  }

  // 3. СТАН УСПІХУ (GRID)
  return (
    <section className="w-full">
      {/* grid-cols-1 -> Мобільний (1 стовпчик)
         sm:grid-cols-2 -> Планшет (2 стовпчики)
         lg:grid-cols-4 -> Десктоп (4 стовпчики, як на макеті)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12">
        {cars.map((car) => (
          // Важливо: key має бути унікальним (id з бази даних)
          // Ми передаємо весь об'єкт car у компонент картки
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarGrid;