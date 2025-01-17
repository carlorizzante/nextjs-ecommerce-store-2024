import { Billboard } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboardsAction = async (): Promise<Billboard[]> => {
  const response = await fetch(URL);
  return response.json();
};
