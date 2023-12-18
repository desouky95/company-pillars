"use client";
import { Pillar } from "@/data/pillars";
import { useCart } from "@/providers/CartProvider";
import { useSidebar } from "@/providers/SidebarProvider";
import { PlusOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Space, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";
import { rgba } from "polished";

type Props = {
  pillar: Pillar;
};

export default function PillarCard({ pillar }: Props) {
  const { add } = useCart();
  const { open } = useSidebar();

  const handleAdd = () => {
    add({ ...pillar });
    open("cart");
  };
  return (
    <Card
      bodyStyle={{
        padding: "0 16px",
        background: pillar.color,
        borderRadius: 8,
        minHeight: 173,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#FFF",
      }}
      bordered
      style={{ minWidth: 300, padding: "8px" }}
      cover={
        <Flex style={{ padding: "2rem 3rem" ,display : 'flex' }} justify="center">
          <Image
            width={138}
            style={{ objectFit: "contain" }}
            height={138}
            alt="example"
            src={pillar.imagePath ?? "/images/pillar1.svg"}
          />
        </Flex>
      }
    >
      <Meta title={pillar.name} description={pillar.description} />

      <Flex align="center" justify="space-between">
        <Typography.Text
          style={{
            fontSize: 20,
            color: "#FFF",
          }}
        >
          {pillar.value} DTSU*
        </Typography.Text>
        <Flex gap={12}>
          <Link href={`/pillars/${pillar.name}`}>
            <Button
              size="large"
              style={{ background: rgba("#000", 0.1), color: "#FFF" }}
              shape="circle"
              icon={<SendOutlined />}
            />
          </Link>
          <Button
            onClick={handleAdd}
            size="large"
            style={{ background: rgba("#000", 0.1), color: "#FFF" }}
            shape="circle"
            icon={<PlusOutlined />}
          />
        </Flex>
      </Flex>
    </Card>
  );
}
