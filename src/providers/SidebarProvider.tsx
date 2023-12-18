"use client";
import React from "react";
import { createContext, PropsWithChildren, useContext } from "react";

type SidebarContextArgs = {
  open: (type: "cart" | "kitchen") => void;
  close: () => void;
  isOpen: boolean;
  type?: "cart" | "kitchen";
};

const SidebarContext = createContext<SidebarContextArgs | null>(null);

export const SidebarProvider = ({ children, ...props }: PropsWithChildren) => {
  const [type, setType] = React.useState<"cart" | "kitchen" | undefined>();
  const [open, setOpen] = React.useState(false);

  const toggle = (type: any) => {
    setType(type);
    setOpen(true);
  };
  const close = () => setOpen(false);
  return (
    <SidebarContext.Provider
      value={{
        isOpen: open,
        open: toggle,
        type,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) throw new Error("No SidebarProvider found !!!");
  return context;
};
