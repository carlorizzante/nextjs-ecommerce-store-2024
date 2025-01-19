"use client";

import {
  useEffect,
  useState,
} from 'react';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/use-cart';
import { Button } from './button';

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleOpenCart = () => {
    router.push('/cart');
  }

  return (
    <div className="flex items-center gap-4 ml-auto">
      <Button onClick={handleOpenCart}>
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )

}
