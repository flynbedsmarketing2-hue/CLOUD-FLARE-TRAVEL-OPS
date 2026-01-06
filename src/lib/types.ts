export type ProductStatus = 'draft' | 'published';

export interface Product {
  id: string;
  name: string;
  destination: string;
  price: number;
  status: ProductStatus;
  updatedAt: string;
}
