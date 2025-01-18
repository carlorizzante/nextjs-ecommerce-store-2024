import { getCategoryAction } from '@/actions/get-category.action';
import { getColorsAction } from '@/actions/get-colors.action';
import { getProductsAction } from '@/actions/get-products.action';
import { getSizesAction } from '@/actions/get-sizes.action';
import { Billboard } from '@/components/billboard';
import { Container } from '@/components/container';
import { Filter } from '@/components/filter';
import { MobileFilter } from '@/components/mobile-filter';
import { NoResults } from '@/components/no-results';
import { ProductCard } from '@/components/product-card';
import { WithParams } from '@/lib/types';

export const revalidate = 0;

export default async function CategoryPage({ params, searchParams }: Readonly<WithParams>) {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const category = await getCategoryAction(categoryId);
  const colors = await getColorsAction();
  const sizes = await getSizesAction();

  const products = await getProductsAction({
    categoryId,
    colorId,
    sizeId,
  });

  return (
    <Container>
      <Billboard billboard={category?.billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gab-x-8">
          <MobileFilter colors={colors} sizes={sizes} />
          <div className="hidden lg:block">
            {/* Filters */}
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
