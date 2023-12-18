"use client";
import { pillars } from "@/data/pillars";
import PillarCard from "./components/PillarCard";
import { v4 as uuid } from "uuid";
import { Col, Grid, Row } from "antd";
export default function Dashboard() {
  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        padding: "2rem",
        alignItems: "center",
        height: "100%",
        gap: 16,
      }}
    >
      {pillars.map((pillar) => (
        <Col key={uuid()}>
          <PillarCard pillar={pillar} />
        </Col>
      ))}
    </Row>
  );
}
