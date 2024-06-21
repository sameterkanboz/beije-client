"use client";
import { Order } from "@/models/order";
import { Product } from "@/models/product";
import React, { ReactNode, useContext, useState } from "react";

export interface CartProviderProps {
  children?: ReactNode;
}

export interface CartContextModel {
  order: Order | null;
  handleProductQuantityChange: (
    categoryId: number,
    categoryName: string,
    product: Product,
    quantity: number
  ) => void;
  removeCategoryFromCart: (categoryId: number) => void;
}

export const CartContext = React.createContext<CartContextModel>(
  {} as CartContextModel
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [order, setOrder] = useState<Order | null>(null);

  function handleProductQuantityChange(
    categoryId: number,
    categoryName: string,
    product: Product,
    quantity: number
  ) {
    if (!order) {
      if (quantity > 0) {
        const newOrder: Order = {
          id: "unique-order-id",
          userId: "user-id",
          categories: [
            {
              categoryId,
              categoryName,
              products: [{ product, quantity }],
            },
          ],
          sum: product.price * quantity,
        };
        setOrder(newOrder);
      }
    } else {
      const categoryIndex = order.categories.findIndex(
        (c) => c.categoryId === categoryId
      );
      let updatedCategories;

      if (categoryIndex > -1) {
        const existingProductIndex = order.categories[
          categoryIndex
        ].products.findIndex(
          (p) => p.product.product_id === product.product_id
        );
        let updatedProducts;

        if (existingProductIndex > -1) {
          if (quantity > 0) {
            updatedProducts = order.categories[categoryIndex].products.map(
              (p, index) =>
                index === existingProductIndex ? { ...p, quantity } : p
            );
          } else {
            updatedProducts = order.categories[categoryIndex].products.filter(
              (p, index) => index !== existingProductIndex
            );
          }
        } else if (quantity > 0) {
          updatedProducts = [
            ...order.categories[categoryIndex].products,
            { product, quantity },
          ];
        } else {
          updatedProducts = [...order.categories[categoryIndex].products];
        }

        // If the category is going to be empty, reset the quantities of all its products
        if (updatedProducts.length === 0) {
          updatedCategories = order.categories
            .map((c, index) =>
              index === categoryIndex
                ? {
                    ...c,
                    products: c.products.map((p) => ({ ...p, quantity: 0 })),
                  }
                : c
            )
            .filter((c) => c.products.length > 0);
        } else {
          updatedCategories = order.categories.map((c, index) =>
            index === categoryIndex ? { ...c, products: updatedProducts } : c
          );
        }
      } else if (quantity > 0) {
        updatedCategories = [
          ...order.categories,
          { categoryId, categoryName, products: [{ product, quantity }] },
        ];
      } else {
        updatedCategories = [...order.categories];
      }

      const newSum = updatedCategories.reduce(
        (total, c) =>
          total +
          c.products.reduce(
            (categoryTotal, p) => categoryTotal + p.product.price * p.quantity,
            0
          ),
        0
      );

      const updatedOrder: Order = {
        ...order,
        categories: updatedCategories,
        sum: newSum,
      };

      setOrder(updatedOrder);
    }
  }

  function removeCategoryFromCart(categoryId: number) {
    if (!order) return;

    const updatedCategories = order.categories.filter(
      (c) => c.categoryId !== categoryId
    );

    const newSum = updatedCategories.reduce(
      (total, c) =>
        total +
        c.products.reduce(
          (categoryTotal, p) => categoryTotal + p.product.price * p.quantity,
          0
        ),
      0
    );

    const updatedOrder: Order = {
      ...order,
      categories: updatedCategories,
      sum: newSum,
    };

    if (updatedCategories.length === 0) {
      setOrder(null);
      return;
    }
    setOrder(updatedOrder);
  }

  const values = {
    order,
    handleProductQuantityChange,
    removeCategoryFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export function useCart() {
  return useContext(CartContext);
}
