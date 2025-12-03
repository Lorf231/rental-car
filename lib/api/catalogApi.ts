import api from './api';
import { FilterOptions, FetchCarsResponse } from '@/types';

export const getCars = async (params: FilterOptions) => {
  const { data } = await api.get<FetchCarsResponse>('/cars', {
    params: params,
  });
  
  return data;
};

export const getBrands = async () => {
  const { data } = await api.get<string[]>('/brands');
  return data;
};