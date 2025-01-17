export type WithChildren = React.PropsWithChildren;

export type WithId = { id: string; }

export type WithClassName = {
  className?: string;
}

export type WithParams = {
  // params: Record<string, string>;
  params: Promise<Record<string, string>>;
}

export type WithPagination = {
  page?: number;
  take?: number;
}

export type Billboard = {
  id: string;
  name: string;
  imageUrl: string;
}

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
}

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export type Size = {
  id: string;
  name: string;
}

export type Color = {
  id: string;
  name: string;
  value: string;
}

export type Image = {
  id: string;
  url: string;
}
