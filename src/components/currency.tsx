"use client";

import {
  useEffect,
  useState,
} from 'react';
import { currencyFormatter } from '@/lib/utils';

export const Currency = ({ amount }: { amount: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">
      {currencyFormatter.format(Number(amount))}
    </div>
  );

}
