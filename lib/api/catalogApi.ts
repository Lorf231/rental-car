import api from './api';
import { Car } from '@/types';
import { FilterOptions } from '@/types';

export const getAllCars = async (params: FilterOptions) => {
  // Axios.get приймає два аргументи: URL і конфіг
  // Generic <Car[]> підказує, що data буде масивом машин
  const { data } = await api.get<Car[]>('/cars', { // '/cars' - це ендпоінт
    params: params // Axios сам зробить ?brand=BMW&price=40
  });
  
  return data;
};