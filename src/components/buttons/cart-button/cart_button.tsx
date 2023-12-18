import { useCart } from "@/providers/CartProvider";
import { useSidebar } from "@/providers/SidebarProvider";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";

// import {} from 'antd'

export default function CartButton() {
  const { open } = useSidebar();
  const { total } = useCart();
  return (
    <Badge count={total()} offset={[-35, 3]} color="yellow">
      <Button
        onClick={() => open("cart")}
        shape="circle"
        size="large"
        icon={<ShoppingCartOutlined />}
      ></Button>
    </Badge>
  );
}
