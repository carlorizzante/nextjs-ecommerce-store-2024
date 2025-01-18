import { Color } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColorsAction = async (): Promise<Color[]> => {
  const response = await fetch(URL);
  return response.json();
};
