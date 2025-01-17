import { ShoppingCart } from 'lucide-react';
import {
  Product,
  WithChildren,
} from '@/lib/types';
import { currencyFormatter } from '@/lib/utils';
import { Button } from './button';

type InfoProps = {
  product: Product;
};

export const Info = ({ product }: InfoProps) => (
  <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 space-y-3">
    <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
    <div className="flex justify-between items-end">
      <p className="text-2xl text-gray-900">
        {currencyFormatter.format(Number(product.price))}
      </p>
    </div>
    <hr className="border-t border-gray-200" />
    <div className="flex items-center gap-x-4">
      <h3 className="font-semibold text-black">Size:</h3>
      {product.size.name}
    </div>
    <InfoLabel label="Color">
      <span
        className="w-6 h-6 rounded-full border border-gray-600"
        style={{ backgroundColor: product.color.value }}
      />{product.color.name}
    </InfoLabel>
    <div className="flex items-center gap-3">
      <Button className="flex items-center gap-2">
        <ShoppingCart size={20} />
        Add to cart
      </Button>
    </div>
  </div>
);

const InfoLabel = ({ children, label }: WithChildren & { label: string }) => (
  <div className="flex items-center gap-x-4 text-black">
    <h3 className="font-semibold text-black">{label}:</h3>
    {children}
  </div>
)
