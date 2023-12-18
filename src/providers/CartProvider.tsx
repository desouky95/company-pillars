"use client";
import React, { useContext } from "react";
import { PropsWithChildren, createContext } from "react";
import { v4 as uuid } from "uuid";
import { useKitchen } from "./KitchenProvider";
type CartContextArgs = {
  isEmpty: () => boolean;
  handleCheckout: () => void;
  add: (item: any) => any;
  remove: (id: any) => boolean;
  list: () => Array<any>;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  total: () => number;
  getSubTotal: () => number;
};

const CartContext = createContext<CartContextArgs | null>(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const { transferItems } = useKitchen();
  const [items, setItems] = React.useState<Array<any>>([]);

  const addItem = (item: any) => {
    const exist = items.find((_) => _.id === item.id);
    if (exist) {
      const index = items.findIndex((_) => _.id === item.id);
      const newArr = [...items];
      newArr.splice(index, 1, { ...exist, count: exist.count + 1 });

      setItems(newArr);
      return item;
    }
    setItems((prev) => [...prev, { ...item, count: 1 }]);
    return item;
  };

  const removeItem = (id: any) => {
    const indexOFItem = items.findIndex((_) => _.id === id);
    if (indexOFItem < 0) return false;
    const newItems = [...items];
    newItems.splice(indexOFItem, 1);
    setItems((prev) => newItems);
    return true;
  };

  const isEmpty = () => total() === 0;
  const handleCheckout = () => {
    transferItems(items);
    setItems([]);
  };

  const list = () => [...items];

  const incrementItem = (id: number) => {
    const index = items.findIndex((_) => _.id == id);
    const item = items.find((_) => _.id == id);
    const newArr = [...items];
    newArr.splice(index, 1, { ...item, count: item.count + 1 });
    setItems(newArr);
  };

  const decrementItem = (id: number) => {
    const item = items.find((_) => _.id == id);
    if (item.count === 1) {
      removeItem(item.id);
      return;
    }
    const index = items.findIndex((_) => _.id == id);
    const newArr = [...items];
    newArr.splice(index, 1, { ...item, count: item.count - 1 });
    setItems(newArr);
  };

  const total = () => items.reduce((acc, curr) => curr.count + acc, 0);
  const getSubTotal = () =>
    items.reduce((acc, curr) => curr.value * curr.count + acc, 0);

  return (
    <CartContext.Provider
      value={{
        total,
        list,
        add: addItem,
        handleCheckout,
        isEmpty,
        remove: removeItem,
        decrementItem,
        incrementItem,
        getSubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("No CartProvider Found !!!");

  return context;
};
