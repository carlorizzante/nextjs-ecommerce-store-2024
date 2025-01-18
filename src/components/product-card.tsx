"use client";

import { MouseEventHandler } from 'react';
import {
  Expand,
  ShoppingCart,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePreviewModal } from '@/hooks';
import {
  Product,
  WithClassName,
} from '@/lib/types';
import { cn } from '@/lib/utils';
import { Currency } from './currency';
import { IconButton } from './icon-button';

type ProductCardProps = WithClassName & {
  product: Product;
}

export const ProductCard = ({ className, product }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleOpenProductPage = () => {
    router.push(`/product/${product.id}`)
  }

  const handlePreviewProduct: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  }

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
  }

  return (
    <div
      onClick={handleOpenProductPage}
      className={cn('bg-white group cursor-pointer rounded-xl border p-3 space-y-4', className)}
    >
      {/* Images and actions */}
      <div className="aspect-square rounded-md bg-gray-100 relative">
        <Image
          alt={product.name}
          src={product.images[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute w-full px-6 bottom-5 opacity-0 group-hover:opacity-100 transition">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} />}
              onClick={handlePreviewProduct}
            />
            <IconButton
              icon={<ShoppingCart size={20} />}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">
          {product.name}
        </p>
        <p className="text-sm text-gray-500">
          {product.category.name}
        </p>
      </div>
      <div className="flex items-center">
        <Currency amount={product.price} />
      </div>
    </div>
  )

}
