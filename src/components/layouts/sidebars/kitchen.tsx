"use client";

import { useKitchen } from "@/providers/KitchenProvider";
import EmptyCart from "./empty_cart";
import { Badge, Button, Divider, Flex, Space, Table } from "antd";
import Image from "next/image";
import { CloudDownloadOutlined } from "@ant-design/icons";

export default function Kitchen() {
  const { list, isEmpty, total } = useKitchen();

  if (isEmpty()) return <EmptyCart />;

  return (
    <Flex vertical style={{ padding: "0 1rem" }}>
      <Table
        columns={[
          {
            title: "Request",
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
                    <div>{record.count} DTSU</div>
                  </Flex>
                </Flex>
              );
            },
          },
          {
            title: "Status",
            dataIndex: "count",
            align: "center",
            render: (value, record) => {
              return <Badge dot color="red" />;
            },
          },
          {
            title: "O/P Link",
            align: "center",
            render(val, record) {
              return <CloudDownloadOutlined />;
            },
          },
        ]}
        dataSource={list()}
        pagination={false}
      />

      <Divider />

      <Flex justify="space-between" style={{ marginBottom: "1rem" }}>
        <span>Units Under Processing</span>
        <span style={{ color: "#0097C2" }}>{total()} DTSUs</span>
      </Flex>
      <Flex justify="space-between">
        <span>Units Completed</span>
        <span style={{ color: "#0097C2" }}>{total()} DTSUs</span>
      </Flex>
      <Divider />
      <Flex justify="space-between">
        <span>Total Units Consumed</span>
        <span style={{ color: "#0097C2" }}>{total()} DTSUs</span>
      </Flex>
      <Divider />
      <Flex vertical gap={"1rem"}>
        <Button type="primary" shape="round" block size="large">
          Refresh Status
        </Button>
        <Button shape="round" block size="large">
          Back to Your Dashboard
        </Button>
      </Flex>
    </Flex>
  );
}
