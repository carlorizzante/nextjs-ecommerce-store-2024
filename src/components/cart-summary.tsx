"use client";

import { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useCart } from '@/hooks/use-cart';
import { Button } from './button';
import { Currency } from './currency';

const CHECKOUT_URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

export const CartSummary = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.removeAll);

  const total = useCart((state) => state.items.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0));

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        CHECKOUT_URL,
        { productIds: items.map((item) => item.id) }
      );
      window.location = response.data.url;
    } catch {
      toast.error('An error occurred. Please try again.');
      console.log('An error occurred. Please try again.');
    }
  }

  useEffect(() => {
    if (searchParams.get('success')) {
      clearCart();
      toast.success('Payment completed. ');
    } else if (searchParams.get('canceled')) {
      toast.error('Payment canceled.');
    } else {
      toast.error('An error occurred. Please try again.');
      return;
    }
  }, [clearCart, searchParams]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 lg:col-span-5 lg:mt-0 lg:p-8 space-y-6">
      <h2 className="text-lg font-bold space-y-4">
        Cart Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Order Total
          </div>
          <Currency amount={total} />
        </div>
      </div>
      <Button
        onClick={handleCheckout}
        className="w-full justify-center"
      >
        Checkout
      </Button>
    </div>
  );
}
