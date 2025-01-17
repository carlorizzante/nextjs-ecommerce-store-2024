import { WithClassName } from '@/lib/types';
import { cn } from '@/lib/utils';

type IconButtonProps = WithClassName & {
  icon: React.ReactNode;
  onClick: () => void;
};

export const IconButton = ({ className, icon, onClick }: IconButtonProps) => (
  <button
    className={cn('flex justify-center items-center rounded-full bg-white shadow-md p-2 hover:scale-110 transition', className)}
    onClick={onClick}
  >
    {icon}
  </button>
)
