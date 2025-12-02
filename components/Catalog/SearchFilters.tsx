"use client";

interface SearchFiltersProps {
  brands: string[];
  prices: number[];
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  selectedPrice: string;
  setSelectedPrice: (value: string) => void;
  onSearch: () => void;
}

const SearchFilters = ({
  brands,
  prices,
  selectedBrand,
  setSelectedBrand,
  selectedPrice,
  setSelectedPrice,
  onSearch,
}: SearchFiltersProps) => {
  
  return (
    <div className="flex flex-col lg:flex-row items-end gap-4 justify-center mb-12 max-w-6xl mx-auto">
      {/* Brand */}
      <div className="flex flex-col gap-1 w-full lg:w-auto">
        <label className="text-xs font-medium text-gray-500 pl-1">Car brand</label>
        <div className="relative">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="appearance-none w-full lg:w-[220px] bg-[#F7F7FB] border-none rounded-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="">Choose a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          {/* Arrow Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1 w-full lg:w-auto">
        <label className="text-xs font-medium text-gray-500 pl-1">Price/ 1 hour</label>
        <div className="relative">
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="appearance-none w-full lg:w-[150px] bg-[#F7F7FB] border-none rounded-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="">To $</option>
            {prices.map((price) => (
              <option key={price} value={price}>${price}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </div>

      {/* Mileage Inputs - Можна теж винести пропси, але для скорочення лишимо тут */}
      <div className="flex flex-col gap-1 w-full lg:w-auto">
        <label className="text-xs font-medium text-gray-500 pl-1">Car mileage / km</label>
        <div className="flex gap-1">
          <input type="number" placeholder="From" className="w-full lg:w-[140px] bg-[#F7F7FB] border-none rounded-l-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" placeholder="To" className="w-full lg:w-[140px] bg-[#F7F7FB] border-none rounded-r-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <button onClick={onSearch} className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-10 rounded-xl transition-colors shadow-lg shadow-blue-200">
        Search
      </button>
    </div>
  );
};

export default SearchFilters;