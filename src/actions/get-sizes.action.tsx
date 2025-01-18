import { Size } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizesAction = async (): Promise<Size[]> => {
  const response = await fetch(URL);
  return response.json();
};
