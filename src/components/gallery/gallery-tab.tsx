import Image from 'next/image';
import { Image as ImageType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Tab } from '@headlessui/react';

type GalleryTabProps = {
  image: ImageType;
}

export const GalleryTab = ({ image }: GalleryTabProps) => (
  <Tab className="relative flex aspect-square cursor-pointer justify-center items-center rounded-md">
    {({ selected }) => (
      <div>
        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
          <Image
            alt=""
            src={image.url}
            className="object-cover object-center"
            fill
          />
        </span>
        <span className={cn(
          "absolute inset-0 rounded-md ring-2 ring-offset-2",
          selected ? "ring-blck" : "ring-transparent"
        )}>
        </span>
      </div>
    )}
  </Tab>
)


// < button key = { image.id } className = "relative w-full h-0 aspect-w-1 aspect-h-1" >
//   <img src={image.url} alt="" className="absolute inset-0 w-full h-full object-center object-cover" />
//           </button >
