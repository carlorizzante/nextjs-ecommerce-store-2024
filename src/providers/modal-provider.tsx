"use client";

import {
  useEffect,
  useState,
} from 'react';
import { PreviewModal } from '@/components/modals';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  )
}
