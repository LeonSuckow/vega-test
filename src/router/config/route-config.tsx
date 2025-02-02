import { RouterItemProps } from "@/interface/route";
import { Layout } from "@/layout/layout";
import { UserDetails } from "@/pages/user/details/user-details";
import { UserList } from "@/pages/user/list/user-list";
import { Outlet } from "react-router";

export const ROUTE_CONFIG: RouterItemProps[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    subRoutes: [
      {
        path: "user",
        element: <Outlet />,
        subRoutes: [
          {
            path: "list",
            element: <UserList />,
          },
          {
            path: "details/:userId",
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
];
