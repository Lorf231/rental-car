"use client";

import { useState, useEffect } from "react";
import { Car } from "@/types";
import SearchFilters from "@/components/Catalog/SearchFilters";
import CarGrid from "@/components/Catalog/CarGrid";

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([]);
  
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Імітація завантаження з бекенду
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        // Тут твій fetch запит
        
        // Mock Data
        const mockCars: Car[] = [
          { id: 1, make: "Buick", model: "Enclave", year: 2008, rentalPrice: 40, address: "Kiev, Ukraine", rentalCompany: "Luxury Car Rentals", type: "SUV", mileage: 9582 },
          { id: 2, make: "Volvo", model: "XC90", year: 2019, rentalPrice: 50, address: "Lviv, Ukraine", rentalCompany: "Premium Auto", type: "SUV", mileage: 5352 },
          { id: 3, make: "Subaru", model: "Outback", year: 2016, rentalPrice: 30, address: "Odessa, Ukraine", rentalCompany: "Adventure Car", type: "SUV", mileage: 4061 },
           // ... додай більше для тесту
        ];
        
        setCars(mockCars);
        setBrands(["Buick", "Volvo", "Subaru", "BMW"]);
        setPrices([30, 40, 50, 60, 70, 80]);
        
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", selectedBrand, selectedPrice);
    // Тут логіка запиту до бекенду з фільтрами
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      
      {/* 1. Компонент фільтрації */}
      <SearchFilters 
        brands={brands}
        prices={prices}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onSearch={handleSearch}
      />

      {/* 2. Компонент списку карток */}
      <CarGrid 
        cars={cars} 
        isLoading={isLoading} 
      />

      {/* Кнопка Load More (можна теж винести в окремий компонент, якщо хочеш) */}
      {!isLoading && cars.length > 0 && (
        <div className="flex justify-center">
          <button className="button bg-transparent border border-[#3470FF] text-[#101828] hover:border-[#0B44CD] px-[51px] py-3">
            Load more
          </button>
        </div>
      )}

    </div>
  );
}

