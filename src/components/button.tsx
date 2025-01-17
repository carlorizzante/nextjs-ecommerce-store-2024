import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'flex justify-between items-center gap-2 rounded-full bg-black px-4 py-2',
        'text-white font-semibold text-sm',
        'hover:opacity-75 transition',
        'disabled:cursor-not-allowed',
        'disabled:opacity-50',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
})
