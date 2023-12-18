"use client";

import { useCart } from "@/providers/CartProvider";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Divider, Flex, InputNumber, Space, Table } from "antd";
import Image from "next/image";
import EmptyCart from "./empty_cart";
import { useSidebar } from "@/providers/SidebarProvider";

export default function Cart() {
  const {
    list,
    decrementItem,
    incrementItem,
    remove,
    getSubTotal,
    isEmpty,
    handleCheckout,
  } = useCart();
  const { open } = useSidebar();

  if (isEmpty()) return <EmptyCart />;

  return (
    <Flex vertical style={{ padding: "0 1rem" }}>
      <Table
        columns={[
          {
            title: "Product",
            dataIndex: "name",
            width: "70%",
            render(value, record, index) {
              return (
                <Flex gap={12} align="start">
                  <Image
                    width={40}
                    height={40}
                    alt={record.name}
                    src={"/images/cart_item.png"}
                  />
                  <Flex vertical justify="space-between">
                    <div>{record.name}</div>
                    <div>{record.value * record.count} DTSU</div>
                  </Flex>
                </Flex>
              );
            },
          },
          {
            title: "Qty.",
            dataIndex: "count",
            align: "end",
            render: (value, record) => {
              return (
                <InputNumber
                  width={40}
                  style={{ maxWidth: 44 }}
                  onChange={(newValue) => {
                    if (newValue < value) {
                      decrementItem(record.id);
                    } else {
                      incrementItem(record.id);
                    }
                  }}
                  value={value}
                />
              );
            },
          },
          {
            title: "Remove",
            align: "center",
            render(val, record) {
              return (
                <Button
                  style={{ border: "none" }}
                  danger
                  onClick={() => remove(record.id)}
                  shape="circle"
                  icon={<DeleteFilled />}
                />
              );
            },
          },
        ]}
        dataSource={list()}
        pagination={false}
      />
      <Divider />
      <Flex justify="space-between">
        <span>Sub Total</span>
        <span style={{ color: "#0097C2" }}>{getSubTotal()} DTSU</span>
      </Flex>
      <Divider />
      <Flex vertical gap={"1rem"}>
        <Button
          onClick={() => {
            handleCheckout();
            open("kitchen");
          }}
          type="primary"
          shape="round"
          block
          size="large"
        >
          Checkout
        </Button>
        <Button shape="round" block size="large">
          Back to Run Information
        </Button>
      </Flex>
    </Flex>
  );
}
