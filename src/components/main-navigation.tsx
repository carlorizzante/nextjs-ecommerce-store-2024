"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Category,
  WithClassName,
} from '@/lib/types';
import { cn } from '@/lib/utils';

type MainNavigationProps = WithClassName & {
  data: Category[];
};

export const MainNavigation = ({ data = [] }: MainNavigationProps) => {
  const pathname = usePathname();

  const routes = data.map(({ id, name }: { id: string; name: string; }) => ({
    href: `/category/${id}`,
    label: name,
    active: pathname === `/category/${id}`,
  }));

  return (
    <nav className="flex items-center gap-4 lg:gap-6 mx-6">
      {routes.map(({ href, label, active }) => (
        <Link key={href} href={href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            active ? 'text-black' : 'text-neutral-500')}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
