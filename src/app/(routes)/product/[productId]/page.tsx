import { getProductAction } from '@/actions/get-product.action';
import { getProductsAction } from '@/actions/get-products.action';
import { Container } from '@/components/container';
import { Gallery } from '@/components/gallery';
import { Info } from '@/components/info';
import { ProductList } from '@/components/product-list';
import { WithParams } from '@/lib/types';

export default async function ProductPage({ params }: Readonly<WithParams>) {
  const { productId } = await params;

  const product = await getProductAction(productId);
  const suggestedProducts = await getProductsAction({
    categoryId: product?.category?.id,
  });

  console.log('suggestedProducts', suggestedProducts);

  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <Gallery images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info product={product} />
          </div>
        </div>
        <hr className="my-10 border-t border-gray-200" />
        <ProductList title="Suggested Products" products={suggestedProducts} />
      </div>
    </Container>
  );
}
