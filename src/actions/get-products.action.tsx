import queryString from 'query-string';
import { Product } from '@/lib/types';

export const dynamic = 'force-dynamic' // defaults to force-static

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  isFeatured?: boolean;
  limit?: number;
  sizeId?: string;
};

export const getProductsAction = async (query: Query): Promise<Product[]> => {
  const stringified_url = queryString.stringifyUrl({
    url: URL,
    query,
  });

  const response = await fetch(stringified_url);
  return response.json();
};
