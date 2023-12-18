import { useKitchen } from "@/providers/KitchenProvider";
import { useSidebar } from "@/providers/SidebarProvider";
import { HddOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";

export default function KitchenButton() {
  const { open } = useSidebar();
  const { total } = useKitchen();
  return (
    <Badge count={total()} offset={[-35, 3]} color="yellow">
      <Button
        onClick={() => open("kitchen")}
        size="large"
        shape="circle"
        icon={<HddOutlined />}
      />
    </Badge>
  );
}
