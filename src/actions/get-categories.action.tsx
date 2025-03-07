import { Category } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategoriesAction = async (): Promise<Category[]> => {
  const response = await fetch(URL);
  return response.json();
};
