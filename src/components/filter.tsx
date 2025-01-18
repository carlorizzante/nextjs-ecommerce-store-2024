"use client";

import {
  useRouter,
  useSearchParams,
} from 'next/navigation';
import queryString from 'query-string';
import {
  Color,
  Size,
} from '@/lib/types';
import { cn } from '@/lib/utils';

type FilterProps = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    }

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center gap-2">
            <button
              key={filter.id}
              onClick={() => handleClick(filter.id)}
              className={cn(
                'p-2 text-sm text-gray-800 border border-gray-300 rounded-md',
                'bg-white text-black',
                selectedValue === filter.id && 'bg-black text-white'
              )}
            >
              {filter.name}
            </button>
          </div>
        ))}
      </div>
    </div >
  );

}
