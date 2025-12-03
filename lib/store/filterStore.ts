import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FilterState {
  selectedBrand: string;
  selectedPrice: string;
  milesFrom: number | "";
  milesTo: number | "";
  _hasHydrated: boolean;
}

interface FilterActions {
  setBrand: (brand: string) => void;
  setPrice: (price: string) => void;
  setMilesFrom: (miles: number | "") => void;
  setMilesTo: (miles: number | "") => void;
  resetFilters: () => void;
  setHasHydrated: (state: boolean) => void;
}

interface IFilterStore extends FilterState, FilterActions {}

const initialState: FilterState = {
  selectedBrand: "",
  selectedPrice: "",
  milesFrom: "",
  milesTo: "",
  _hasHydrated: false,
};

export const useFilterStore = create<IFilterStore>()(
  persist(
    (set) => ({
      ...initialState,

      setBrand: (brand) => set({ selectedBrand: brand }),
      setPrice: (price) => set({ selectedPrice: price }),
      setMilesFrom: (miles) => set({ milesFrom: miles }),
      setMilesTo: (miles) => set({ milesTo: miles }),
      resetFilters: () => set(initialState),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: 'car-rental-filters',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);