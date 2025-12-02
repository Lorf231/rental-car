import { create } from 'zustand';
import { Car } from '@/types';

// 1. Стан
interface CarState {
  cars: Car[];
  isLoading: boolean;
  error: string | null; // Додамо обробку помилок для надійності
}

// 2. Дії
interface CarActions {
  // Ця функція прийматиме фільтри (ми їх поки зробимо any або опишемо пізніше)
  fetchCars: () => Promise<void>; 
}

// 3. Збираємо докупи
interface ICarStore extends CarState, CarActions {}

const initialState: CarState = {
  cars: [],
  isLoading: false,
  error: null,
};

export const useCarStore = create<ICarStore>((set) => ({
  ...initialState,

  fetchCars: async () => {
    // --- ТУТ ТВІЙ КОД ---
    // 1. Познач, що завантаження почалося (isLoading: true, error: null)
    
    try {
      // 2. Імітація запиту. 
      // Уяви, що цей масив прийшов з серверу:
      const mockCars: Car[] = [
          { id: 1, make: "Buick", model: "Enclave", year: 2008, rentalPrice: 40, address: "Kiev", rentalCompany: "Luxury", type: "SUV", mileage: 9582 },
          // ... можеш додати ще одну для тесту
      ];

      // Щоб було реалістично, можна додати await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 3. Запиши mockCars у стейт (cars: mockCars)

    } catch (error) {
       // 4. Якщо помилка - запиши її (set({ error: 'Failed to fetch' }))
    } finally {
       // 5. Завантаження закінчилось (isLoading: false)
    }
  },
}));