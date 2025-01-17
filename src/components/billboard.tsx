import { Billboard as BillboardType } from '@/lib/types';

type BillboardProps = {
  data: BillboardType;
}

export const Billboard = ({ data }: BillboardProps) => (
  <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    <div
      className="relative rounded-xl aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full text-center gap-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {data?.name}
        </div>
      </div>
    </div>
  </div>
);
