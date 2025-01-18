"use client";

import { useState } from 'react';
import {
  Plus,
  X,
} from 'lucide-react';
import {
  Color,
  Size,
} from '@/lib/types';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import { Button } from './button';
import { Filter } from './filter';
import { IconButton } from './icon-button';

type FilterProps = {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilter = ({ sizes, colors }: FilterProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex items-center gap-2 lg:hidden"
        onClick={handleOpen}
      >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        as="div"
        className="relative lg:hidden z-40"
        open={open}
        onClose={handleClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed flex inset-0 z-40">
          <DialogPanel
            className="relative flex flex-col w-full max-w-xs ml-auto overflow-y-auto bg-white shadow-xl "
          >
            <div className="flex justify-end items-center px-4 py-2">
              <IconButton onClick={handleClose} icon={<X size={15} />} className="border" />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
