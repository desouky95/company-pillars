"use client";
import React, { useContext } from "react";
import { PropsWithChildren, createContext } from "react";

type KitchenContextArgs = {
  isEmpty: () => boolean;
  handleCheckout: () => void;
  add: (item: any) => any;
  list: () => Array<any>;
  getSubTotal: () => number;
  transferItems: (items: Array<any>) => void;
  total: () => number;
};

const KitchenContext = createContext<KitchenContextArgs | null>(null);

export const KitchenProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = React.useState<Array<any>>([]);

  const addItem = (item: any) => {
    setItems((prev) => [...prev, item]);
    return item;
  };

  const isEmpty = () => total() === 0;
  const handleCheckout = () => {};

  const list = () => [...items];

  const total = () => items.reduce((acc, curr) => curr.count + acc, 0);
  const getSubTotal = () =>
    items.reduce((acc, curr) => curr.value * curr.count + acc, 0);

  const transferItems = (transfer_items: Array<any>) => {
    setItems([...items, ...transfer_items]);
  };

  return (
    <KitchenContext.Provider
      value={{
        list,
        add: addItem,
        handleCheckout,
        isEmpty,
        getSubTotal,
        total,
        transferItems,
      }}
    >
      {children}
    </KitchenContext.Provider>
  );
};

export const useKitchen = () => {
  const context = useContext(KitchenContext);
  if (!context) throw new Error("No KitchenProvider Found !!!");

  return context;
};
