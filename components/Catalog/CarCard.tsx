"use client";

import { useState } from "react";
import Image from "next/image";
import { Car } from "@/types/index";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {/* Картинка */}
      <div className="relative h-64 w-full bg-gray-200 rounded-xl overflow-hidden mb-3">
        {car.img ? (
          <Image src={car.img} alt={car.model} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
            No Image
          </div>
        )}

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-1 rounded-full hover:scale-110 transition-transform"
        >
          {isFavorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white/80 hover:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          )}
        </button>
      </div>

      {/* Інфо */}
      <div className="flex flex-col gap-2 mb-4 px-1">
        <div className="flex justify-between items-center text-base font-medium text-gray-900">
          <div className="flex gap-1">
            <span>{car.make}</span>
            <span className="text-blue-600">{car.model}</span>,
            <span>{car.year}</span>
          </div>
          <span className="font-semibold">${car.rentalPrice}</span>
        </div>

        <div className="text-xs text-gray-500 font-normal space-y-1">
          <div className="flex items-center gap-2 truncate">
            <span>{car.address.split(',')[0]}</span>
            <span className="w-[1px] h-3 bg-gray-300"></span>
            <span>{car.address.split(',')[1]}</span>
            <span className="w-[1px] h-3 bg-gray-300"></span>
            <span className="truncate">{car.rentalCompany}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{car.type}</span>
            <span className="w-[1px] h-3 bg-gray-300"></span>
            <span>{car.make}</span>
            <span className="w-[1px] h-3 bg-gray-300"></span>
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
        Read more
      </button>
    </div>
  );
};

export default CarCard;