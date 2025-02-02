import { PieChart, User } from "lucide-react";

export const sidebarData = {
  user: {
    name: "Ana Elena",
    email: "teste@example.com",
    avatar: "/user.png",
  },
  team: {
    name: "Vega I.T.",
    logo: "/logo.svg",
    plan: "Sistemas para hoteis",
  },
  pages: [
    {
      name: "Usuários",
      url: "/user/list",
      icon: User,
      subRoute: [
        {
          name: "Details",
          url: "/user/list",
          icon: User,
        },
      ],
    },
    {
      name: "Teste",
      url: "#",
      icon: PieChart,
    },
  ],
};
