import { useSidebar } from "@/providers/SidebarProvider";
import { Flex, Typography } from "antd";
import Image from "next/image";

export default function EmptyCart() {
  const {type} = useSidebar()
  return (
    <Flex align="center" justify="center" style={{ height: "100%" }} vertical>
      <Image width={67} height={85} alt="empty cart" src={"/images/cart.png"} />

      <Typography.Text>Your run {type} is empty!</Typography.Text>
      <Typography.Text style={{ color: "#637182" }}>
        start add your requests here
      </Typography.Text>
    </Flex>
  );
}
