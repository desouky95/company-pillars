"use client";
import { useSidebar } from "@/providers/SidebarProvider";
import Cart from "./cart";
import Kitchen from "./kitchen";
import SidebarHeader from "./sidebar_header";
import { Flex } from "antd";
import { useCart } from "@/providers/CartProvider";
import EmptyCart from "./empty_cart";

export default function SidebarWrapper() {
  const { type } = useSidebar();

  const { isEmpty } = useCart();

  return (
    <Flex
      vertical
      style={{ borderInlineStart: "1p solid #C2CAD4", height: "100%" }}
    >
      <SidebarHeader />
      {type === "cart" && <Cart />}
      {type === "kitchen" && <Kitchen />}
    </Flex>
  );
}
