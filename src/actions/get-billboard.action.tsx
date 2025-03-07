import { Billboard } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboardAction = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};
