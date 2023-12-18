import CartButton from "@/components/buttons/cart-button/cart_button";
import KitchenButton from "@/components/buttons/kitchen-button/kitchen_button";
import { useSidebar } from "@/providers/SidebarProvider";
import { Avatar, Button, Flex, Grid, Typography } from "antd";
import Link from "next/link";

export default function Header() {
  const { isOpen, type } = useSidebar();
  return (
    <>
      <Flex
        style={{
          height: "100%",
          borderBottom: "1px solid #C2CAD4",
          padding: "0 2rem",
        }}
        justify="space-between"
        align="center"
      >
        <Flex vertical>
          <Link href={"/"}>
            <Typography.Title level={4}>
              Welcome to My Company!
            </Typography.Title>
          </Link>
          <Typography.Text>You have started your 30 day trial</Typography.Text>
        </Flex>
        <Flex gap={"small"} align="center">
          <Avatar.Group
            maxCount={4}
            size={"large"}
            shape="circle"
            maxPopoverTrigger="click"
          >
            <Avatar src="/images/person2.png" />
            <Avatar src="/images/person1.png" />
            <Avatar src="/images/person2.png" />
            <Avatar src="/images/person1.png" />
          </Avatar.Group>
          <Flex vertical align="start">
            <Typography.Text>Our architects are here to help</Typography.Text>
            <Button style={{ padding: 0 }} type="link" href="/booking">
              Book a free session
            </Button>
          </Flex>
        </Flex>

        <Flex gap={"middle"} align="center">
          {(!isOpen || (isOpen && type === "kitchen")) && <CartButton />}
          {(!isOpen || (isOpen && type === "cart")) && <KitchenButton />}
        </Flex>
      </Flex>
    </>
  );
}
