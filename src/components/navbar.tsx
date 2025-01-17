import Link from 'next/link';
import { getCategoriesAction } from '@/actions/get-categories.action';
import { Container } from './container';
import { MainNavigation } from './main-navigation';
import { NavbarActions } from './navbar-actions';

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategoriesAction();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex gap-2 ml-4 lg:ml-0 font-bold text-lg">
            STORE
          </Link>
          <MainNavigation data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )

}
