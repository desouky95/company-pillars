import { useCart } from "@/providers/CartProvider";
import { useKitchen } from "@/providers/KitchenProvider";
import { useSidebar } from "@/providers/SidebarProvider";
import { CloseOutlined } from "@ant-design/icons";
import { Badge, Button, Flex, Space, Typography } from "antd";

export default function SidebarHeader() {
  const { type, close } = useSidebar();

  const { total } = useCart();
  const { list } = useKitchen();
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        minHeight: 90,
        borderBottom: "1px solid #C2CAD4",
        padding: "1rem",
      }}
    >
      <Space size={"middle"}>
        <Button
          size="large"
          onClick={close}
          shape="circle"
          icon={<CloseOutlined />}
        />
        <Typography.Text style={{ fontSize: "1rem", fontWeight: 600 }}>
          Your Run {type}
        </Typography.Text>
      </Space>
      <Space>
        <Space style={{ maxWidth: "8ch" }}>
          <Typography.Text style={{ fontSize: 10 }}>
            Requests in your run {type}
          </Typography.Text>
        </Space>
        <Badge
          count={type === "cart" ? total() : list().length}
          showZero
          color="yellow"
        ></Badge>
      </Space>
    </Flex>
  );
}
