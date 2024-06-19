import { Product } from "./product";

export type Category = {
  categoryId: number;
  categoryName: string;
  products: {
    product: Product;
    quantity: number;
  }[];
};
