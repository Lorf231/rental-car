"use client";

import { useEffect } from "react";
import SearchFilters from "@/components/Catalog/SearchFilters";
import CarGrid from "@/components/Catalog/CarGrid";
import { useCarStore } from "@/lib/store/carStore";
import { useFilterStore } from "@/lib/store/filterStore";

export default function CatalogPage() {
  const { 
    cars, 
    isLoading, 
    error, 
    fetchCars, 
    fetchBrands,
    loadMoreCars, 
    page, 
    totalPages 
  } = useCarStore();
  
  const { selectedBrand, selectedPrice, milesFrom, milesTo } = useFilterStore();

  // Допоміжна функція для збору фільтрів в купу
  const getCurrentFilters = () => ({
    brand: selectedBrand,
    price: selectedPrice,
    mileageFrom: milesFrom,
    mileageTo: milesTo,
  });

  useEffect(() => {
    fetchCars(getCurrentFilters()); 
    fetchBrands();
  }, [fetchCars, fetchBrands]);

  const handleSearch = () => {
    fetchCars(getCurrentFilters());
  };

  // Функція для Load More
  const handleLoadMore = () => {
    loadMoreCars(getCurrentFilters());
  };

  // Перевірка: чи показувати кнопку?
  // Показуємо тільки якщо: не вантажиться, є машини, і поточна сторінка менша за загальну кількість
  const shouldShowLoadMore = !isLoading && cars.length > 0 && page < totalPages;

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      <SearchFilters onSearch={handleSearch} />

      {error && <div className="text-red-600 text-center">{error}</div>}

      <CarGrid cars={cars} isLoading={isLoading} />
      
      {/* КНОПКА LOAD MORE */}
      {shouldShowLoadMore && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={handleLoadMore}
            className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors text-base"
          >
            Load more
          </button>
        </div>
      )}
      
    </div>
  );
}