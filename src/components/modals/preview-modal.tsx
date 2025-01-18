"use client";

import { Gallery } from '@/components/gallery';
import { Info } from '@/components/info';
import { usePreviewModal } from '@/hooks';
import { Modal } from './modal';

export const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal
      open={previewModal.isOpen}
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  )
}
