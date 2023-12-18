"use client";
import { Flex, Layout } from "antd";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ReactNode } from "react";
import React from "react";
import { SidebarProvider, useSidebar } from "@/providers/SidebarProvider";
import SidebarWrapper from "../sidebars/sidebar_wrapper";

const contentStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 360,
  background: "linear-gradient(342deg, #97E0F3 -32.65%, #FFF 85.43%)",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();
  return (
    <Flex gap="middle" wrap="wrap" style={{ minHeight: "100vh" }}>
      <Layout hasSider>
        <Layout>
        <Layout.Header style={{ height: "unset", minHeight: "90px" }}>
            <Header />
          </Layout.Header>
          <Layout.Content style={contentStyle}>{children}</Layout.Content>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout>
        {isOpen && (
          <Layout.Sider width={355}>
            <SidebarWrapper />
          </Layout.Sider>
        )}
      </Layout>
    </Flex>
  );
}
