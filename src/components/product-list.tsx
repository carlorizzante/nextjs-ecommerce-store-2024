import {
  Product,
  WithClassName,
} from '@/lib/types';
import { cn } from '@/lib/utils';
import { NoResults } from './no-results';
import { ProductCard } from './product-card';

type ProductListProps = WithClassName & {
  title: string;
  products: Product[];
};

export const ProductList = ({ className, title, products }: ProductListProps) => (
  <div className={cn('space-y-10 pb-10', className)}>
    <h3 className="text-3xl font-bold">{`${title} (${products.length})`}</h3>
    {products.length === 0 && <NoResults />}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)
