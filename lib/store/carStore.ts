import { create } from 'zustand';
import { Car, FilterOptions } from '@/types';
import { getCars, getBrands } from '@/lib/api/catalogApi';

interface CarState {
  cars: Car[];
  brands: string[];
  isLoading: boolean;
  error: string | null;
  page: number;        // <-- Треба знати, на якій ми сторінці
  totalPages: number;  // <-- Треба знати, чи є ще сторінки
}

interface CarActions {
  fetchCars: (filters: FilterOptions) => Promise<void>;
  loadMoreCars: (filters: FilterOptions) => Promise<void>;
  fetchBrands: () => Promise<void>;
}

interface ICarStore extends CarState, CarActions {}

const initialState: CarState = {
  cars: [],
  brands: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 0, // Поки не знаємо
};

export const useCarStore = create<ICarStore>((set, get) => ({
  ...initialState,

  // 1. Звичайний пошук (Search) - завжди перша сторінка
  fetchCars: async (filters) => {
    set({ isLoading: true, error: null });

    try {
      // При новому пошуку завжди page: 1
      const data = await getCars({ ...filters, page: 1, limit: 8 });
      
      set({ 
        cars: data.cars || [], 
        totalPages: data.totalPages || 0, // Зберігаємо ліміт сторінок
        page: 1 // Скидаємо на 1
      });
    } catch (error) {
      console.error(error);
      set({ error: 'Failed to fetch cars' });
    } finally {
      set({ isLoading: false });
    }
  },

  // 2. Довантаження (Load More)
  loadMoreCars: async (filters) => {
    // get() дозволяє отримати поточний стан
    const { page, totalPages, cars } = get();

    // Якщо ми вже на останній сторінці - нічого не робимо
    if (page >= totalPages) return;

    // Не вмикаємо isLoading глобально, щоб не зникав весь список.
    // Можна зробити окремий прапорець isLoadingMore, але поки просто заблокуємо кнопку в UI
    
    try {
      const nextPage = page + 1;
      const data = await getCars({ ...filters, page: nextPage, limit: 8 });

      set({
        // МАГІЯ ТУТ: Беремо старі машини (...) і додаємо нові (...)
        cars: [...cars, ...(data.cars || [])],
        page: nextPage, // Оновлюємо лічильник
      });

    } catch (error) {
      console.error(error);
      // Тут можна показати toast або alert, що не вдалось завантажити ще
    }
  },
  fetchBrands: async () => {
    try {
      const brandsData = await getBrands();
      set({ brands: brandsData });
    } catch (error) {
      console.error("Failed to fetch brands:", error);
    }
   },
}));