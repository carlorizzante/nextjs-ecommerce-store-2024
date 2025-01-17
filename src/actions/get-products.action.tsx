import qs from 'query-string';
import { Product } from '@/lib/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  isFeatured?: boolean;
  limit?: number;
  sizeId?: string;
};

export const getProductsAction = async (query: Query): Promise<Product[]> => {
  console.log('query', query);
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isFeatured: query.isFeatured,
    },
  });

  console.log('url', url);

  const response = await fetch(URL);
  return response.json();
};
