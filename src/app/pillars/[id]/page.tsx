'use client'
import { Flex } from "antd";

export default function Pillar({ params }: any) {
  return (
    <Flex align="center" justify="center" style={{ height: "100%" }}>
      <h1 className="pillar-title">Welcome to {params.id}</h1>;
    </Flex>
  );
}
