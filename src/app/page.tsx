import { getBillboardAction } from '@/actions/get-billboard.action';
import { getProductsAction } from '@/actions/get-products.action';
import { Billboard } from '@/components/billboard';
import { Container } from '@/components/container';
import { ProductList } from '@/components/product-list';

export default async function HomePage() {
  const billboard = await getBillboardAction('cm5nwb5220001ryjuvwjw6or5');
  const products = await getProductsAction({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
}
