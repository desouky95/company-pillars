export type Pillar = {
  name: string;
  description: string;
  value: number;
  color?: string;
  id: number;
  imagePath?: string;
};

export const pillars: Array<Pillar> = [
  {
    id: 1,
    name: "Mobile Apps",
    description: "Get your own mobile app",
    value: 100,
    color: "#0A488F",
    imagePath: "/images/pillar1.svg",
  },
  {
    id: 2,
    name: "BI",
    description: "Create Dashboards",
    value: 100,
    color: "#579064",
    imagePath: "/images/pillar2.png",
  },
  {
    id: 3,
    name: "HR",
    description: "Talents",
    value: 50,
    color: "#950000",
    imagePath: "/images/pillar3.png",

  },
  {
    id: 4,
    name: "Operations",
    description: "ERP Management",
    value: 100,
    color: "#8F6C0A",
    imagePath: "/images/pillar4.png",

  },
];
