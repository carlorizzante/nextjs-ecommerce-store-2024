"use client";

import Image from 'next/image';
import { Image as ImageType } from '@/lib/types';
import {
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import { GalleryTab } from './gallery-tab';

let counter = 0;

type ProductGalleryProps = {
  images: ImageType[];
}

export const Gallery = ({ images }: ProductGalleryProps) => (
  <TabGroup as="div" className="flex flex-col-reverse">
    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
      <TabList as="div" className="grid grid-cols-4 gap-6">
        {[...images, ...images].map((image) => (
          <GalleryTab key={image.id + (counter++)} image={image} />
        ))}
      </TabList>
    </div>
    <TabPanels as="div" className="aspect-square w-full">
      {[...images, ...images].map((image) => (
        <TabPanel key={image.id + (counter++)} className="aspect-square w-full">
          <div className="relative h-full w-full aspect-square sm:rounded-lg overflow-hidden">
            <Image
              alt=""
              src={image.url}
              className="object-cover object-center"
              fill
            />
          </div>
        </TabPanel>
      ))}
    </TabPanels>
  </TabGroup>
);
