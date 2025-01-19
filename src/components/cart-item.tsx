"use client";

import { Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import {
  Product,
  WithClassName,
} from '@/lib/types';
import { Currency } from './currency';
import { IconButton } from './icon-button';

type CartItemProps = WithClassName & {
  product: Product;
}

export const CartItem = ({ product }: CartItemProps) => {
  const cart = useCart();

  const handleRemoveFromCart = () => {
    cart.removeItem(product.id);
  }
  return (
    <div className="flex gap-6 border-b py-6">
      <div className="relative h-24 2-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          alt=""
          src={product.images[0].url}
          className="object-cover object-center"
          fill
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between ml-4">
        <div className="absolute top-0 right-0 z-10">
          <IconButton
            onClick={handleRemoveFromCart}
            icon={<Trash2Icon size={15} />}
            className="p-2 bg-white rounded-full border"
          />
        </div>
        <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6 pr-9 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{product.name}</p>
          </div>
          <div className="flex mt-1 text-sm">
            <p className="text-gray-500 pr-2 border-r border-gray-200">{product.size.name}</p>
            <p className="text-gray-500 px-2">{product.color.name}</p>
          </div>
          <Currency amount={product.price} />
        </div>
      </div>
    </div>

  );
}
