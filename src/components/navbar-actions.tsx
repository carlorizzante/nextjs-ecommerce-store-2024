"use client";

import {
  useEffect,
  useState,
} from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from './button';

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 ml-auto">
      <Button>
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium text-white">0</span>
      </Button>
    </div>
  )

}
