import { WithChildren } from '@/lib/types';

export const Container = ({ children }: WithChildren) => (
  <div className="mx-auto max-w-7xl">{children}</div>
)
