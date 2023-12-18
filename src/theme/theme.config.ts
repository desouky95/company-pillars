import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    // colorPrimaryBg: "yellow",

    // fontSize: 16,
    // colorPrimary: "#00244D",
    // colorPrimary: "green",
    // colorBgContainer: "#F8F8F8",
    // colorBgContainer: "red",
    // colorBgBase: "#F8F8F8",
    // colorBgElevated: "red",
    // colorBgHeader: "yellow",

    colorText: "#00244D",
    colorBgBase: "#F8F8F8",
  },
  components: {
    Badge: {
      colorTextBase: "#000",
      colorText: "#000",
      colorTextLabel: "#000",
      colorInfoText: "#000",
    },
    Anchor: {
      lineHeight: 0,
    },
    Layout: {
      headerBg: "#F8F8F8",
      siderBg: "#FFF",
      headerPadding: 0,
    },

    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
    Button: {
      colorIcon: "#E1ECF9",
      dangerColor: "#DC1C6A",
    },
    Card: {
      colorTextBase: "#FFF",
      colorTextHeading: "#FFF",
      colorTextDescription: "#FFF",
      colorText: "#FFF",
      colorPrimaryText: "#FFF",
      colorBgBase: "#FFF",
      colorBgContainer: "#FFF",
    },
    Table: {
      colorBgBase: "#FFF",
      headerBg: "#FFF",
      rowSelectedBg: "#FFF",
      rowExpandedBg: "#FFF",
      rowSelectedHoverBg: "#FFF",
    },
  },
};

export default theme;
