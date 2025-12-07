"use client";

import { useEffect } from "react";
import { useCarStore } from "@/lib/store/carStore";
import { useFilterStore } from "@/lib/store/filterStore";
import SearchFilters from "@/components/Catalog/SearchFilters";
import CarGrid from "@/components/Catalog/CarGrid";

export default function CatalogPage() {
  const { 
    cars, isLoading, error, fetchCars, loadMoreCars, page, totalPages, fetchBrands 
  } = useCarStore();
  
  const { 
    selectedBrand, selectedPrice, milesFrom, milesTo, _hasHydrated 
  } = useFilterStore();

  const getCurrentFilters = () => ({
    brand: selectedBrand,
    price: selectedPrice,
    mileageFrom: milesFrom,
    mileageTo: milesTo,
  });

  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  useEffect(() => {
    if (!_hasHydrated) return;
    fetchCars(getCurrentFilters()); 
  }, [_hasHydrated]);

  const handleSearch = () => {
    fetchCars(getCurrentFilters());
  };

  const handleLoadMore = () => {
    loadMoreCars(getCurrentFilters());
  };

  const shouldShowLoadMore = !isLoading && cars.length > 0 && page < totalPages;

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      <SearchFilters onSearch={handleSearch} />
      {error && <div className="text-red-600 text-center">{error}</div>}
      <CarGrid cars={cars} isLoading={isLoading} />
      
      {shouldShowLoadMore && (
        <div className="flex justify-center mt-10">
          <button onClick={handleLoadMore} className="text-blue-600 font-medium hover:underline">
            Load more
          </button>
        </div>
      )}
    </div>
  );
}