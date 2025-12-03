import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. Опис СТАНУ (Дані)
// Використовуємо number | "", щоб інпут міг бути пустим
interface FilterState {
  selectedBrand: string;
  selectedPrice: string;
  milesFrom: number | ""; 
  milesTo: number | "";
}

// 2. Опис ДІЙ (Функції)
interface FilterActions {
  setBrand: (brand: string) => void;
  setPrice: (price: string) => void;
  setMilesFrom: (miles: number | "") => void;
  setMilesTo: (miles: number | "") => void;
  resetFilters: () => void; // Функція для скидання фільтрів
}

// Об'єднуємо все в один тип
// Це потрібно, щоб Zustand розумів структуру стору
interface IFilterStore extends FilterState, FilterActions {}

// Початковий стан виносимо окремо, щоб легко робити Reset
const initialState: FilterState = {
  selectedBrand: "",
  selectedPrice: "",
  milesFrom: "",
  milesTo: "",
};

// 3. Створення стору з Middleware (Persist)
export const useFilterStore = create<IFilterStore>()(
  persist(
    (set) => ({
      ...initialState,

      // --- Actions ---
      setBrand: (brand) => set({ selectedBrand: brand }),
      setPrice: (price) => set({ selectedPrice: price }),
      setMilesFrom: (miles) => set({ milesFrom: miles }),
      setMilesTo: (miles) => set({ milesTo: miles }),

      // Скидання всього до початкового стану
      resetFilters: () => set(initialState),
    }),
    {
      name: 'car-rental-filters', // Унікальне ім'я ключа в LocalStorage
      storage: createJSONStorage(() => localStorage), // Явно вказуємо сховище (best practice)
    }
  )
);