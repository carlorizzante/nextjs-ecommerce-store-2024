"use client";

import {
  useEffect,
  useState,
} from 'react';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from './cart-item';
import { CartSummary } from './cart-summary';

export const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="px-4 py-16 lg:px-8">
      <h1 className="text-3xl font-bold">
        Cart
      </h1>
      <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12 mt-12">
        <div className="lg:col-span-7">
          {cart.items.length === 0 && <p className="text-neutral-500">Your cart is empty.</p>}
          <ul>
            {cart.items.map((product) => (
              <li key={product.id}>
                <CartItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <CartSummary />
      </div>
    </div>
  );
}
