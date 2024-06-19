import { Category } from "./category";

export type Order = {
  id: string;
  userId: string;
  categories: Category[];
  sum: number;
};
