// store/filterStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FilterOptions } from '@/types';

interface IActions {
  setBrand: (brand: string) => void;
  setPrice: (price: string) => void; 
  setMilesFrom: (milesFrom: number | "") => void;
  setMilesTo: (milesTo: number | "") => void;
}

interface ICarFilterState extends FilterOptions, IActions {}

const initialState: FilterOptions = {
  selectedBrand: "",
  selectedPrice: "",
  milesFrom: "",
  milesTo: "",
};

// 2. Створюємо сам хук
export const useFilterStore = create<ICarFilterState>()
(persist((set) => ({
    ...initialState,

  // Логіка функцій
  setBrand: (brand) => set({ selectedBrand: brand }),
  
  // ЗАВДАННЯ ДЛЯ ТЕБЕ:
  // Допиши реалізацію для setPrice по аналогії з setBrand
  setPrice: (price) => set({ selectedPrice: price }),

    setMilesFrom: (milesFrom) => set({ milesFrom }),
    setMilesTo: (milesTo) => set({ milesTo }),
}), 
{
  name: 'filter-storage', 
})
);