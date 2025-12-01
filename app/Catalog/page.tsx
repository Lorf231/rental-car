import Image from "next/image";

// Заглушка, просто щоб відмалювати 8 карток для вигляду
const tempCars = [1, 2, 3, 4, 5, 6, 7, 8];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      
      {/* --- БЛОК ФІЛЬТРІВ --- */}
      <div className="flex flex-col lg:flex-row items-end gap-4 justify-center mb-12 max-w-6xl mx-auto">
        
        {/* Фільтр: Бренд */}
        <div className="flex flex-col gap-1 w-full lg:w-auto">
           <label className="text-xs font-medium text-gray-500 pl-1">Car brand</label>
           <div className="relative">
             <select className="appearance-none w-full lg:w-[220px] bg-[#F7F7FB] border-none rounded-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
               <option>Choose a brand</option>
               <option>Buick</option>
               <option>Volvo</option>
             </select>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
             </div>
           </div>
        </div>

        {/* Фільтр: Ціна */}
        <div className="flex flex-col gap-1 w-full lg:w-auto">
           <label className="text-xs font-medium text-gray-500 pl-1">Price/ 1 hour</label>
           <div className="relative">
             <select className="appearance-none w-full lg:w-[150px] bg-[#F7F7FB] border-none rounded-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
               <option>To $</option>
               <option>$30</option>
               <option>$40</option>
             </select>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
             </div>
           </div>
        </div>

        {/* Фільтр: Пробіг */}
        <div className="flex flex-col gap-1 w-full lg:w-auto">
          <label className="text-xs font-medium text-gray-500 pl-1">Car mileage / km</label>
          <div className="flex gap-1">
             <input type="text" placeholder="From" className="w-full lg:w-[140px] bg-[#F7F7FB] border-none rounded-l-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500" />
             <input type="text" placeholder="To" className="w-full lg:w-[140px] bg-[#F7F7FB] border-none rounded-r-xl py-3.5 px-4 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {/* Кнопка пошуку */}
        <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-10 rounded-xl transition-colors shadow-lg shadow-blue-200">
          Search
        </button>
      </div>


      {/* --- СІТКА КАРТОК (GRID) --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-12 mb-20">
        
        {/* Рендеримо статичні картки */}
        {tempCars.map((item) => (
          <div key={item} className="w-full bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            
            {/* Картинка */}
            <div className="relative h-64 w-full bg-gray-200 rounded-xl overflow-hidden mb-3">
              {/* Тут в майбутньому буде <Image src={car.img} ... /> */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                  Image Placeholder
              </div>

              {/* Сердечко */}
              <button className="absolute top-3 right-3 p-1 rounded-full hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white/80 hover:text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            {/* Текст картки */}
            <div className="flex flex-col gap-2 mb-4 px-1">
              <div className="flex justify-between items-center text-base font-medium text-gray-900">
                <div className="flex gap-1">
                  <span>Buick</span>
                  <span className="text-blue-600">Enclave</span>,
                  <span>2008</span>
                </div>
                <span className="font-semibold">$40</span>
              </div>

              <div className="text-xs text-gray-500 font-normal space-y-1">
                <div className="flex items-center gap-2 truncate">
                   <span>Kiev</span>
                   <span className="w-px h-3 bg-gray-300"></span>
                   <span>Ukraine</span>
                   <span className="w-px h-3 bg-gray-300"></span>
                   <span className="truncate">Luxury Car Rentals</span>
                </div>
                <div className="flex items-center gap-2">
                   <span>SUV</span>
                   <span className="w-px h-3 bg-gray-300"></span>
                   <span>Buick</span>
                   <span className="w-px h-3 bg-gray-300"></span>
                   <span>9,582 km</span>
                </div>
              </div>
            </div>

            {/* Кнопка Read more */}
            <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* --- КНОПКА LOAD MORE --- */}
      <div className="flex justify-center">
        <button className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors">
            Load more
        </button>
      </div>

    </div>
  );
}