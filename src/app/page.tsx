import { getBillboardAction } from '@/actions/get-billboard.action';
import { getProductsAction } from '@/actions/get-products.action';
import { Billboard } from '@/components/billboard';
import { Container } from '@/components/container';
import { ProductList } from '@/components/product-list';

const BILLBOARD_ID = process.env.BILLBOARD_ID!;

export default async function HomePage() {
  const billboard = await getBillboardAction(BILLBOARD_ID);
  const featuredProducts = await getProductsAction({ isFeatured: true });
  const allProducts = await getProductsAction({});

  console.log('billboard', billboard);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={featuredProducts} />
          <ProductList title="All Products" products={allProducts} />
        </div>
      </div>
    </Container>
  );
}
