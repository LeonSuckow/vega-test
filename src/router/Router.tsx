import { Layout } from "@/layout/Layout";
import { UserDetails } from "@/pages/user/UserDetails";
import { UserList } from "@/pages/user/UserList";
import { Outlet, Route, Routes } from "react-router";

interface RouterItemProps {
  path: string;
  element: JSX.Element;
  subRoutes?: RouterItemProps[];
}

const ROUTE_CONFIG: RouterItemProps[] = [
  {
    path: "/",
    element: (
      <>
        <Layout>
          <>
            <Outlet />
          </>
        </Layout>
      </>
    ),
    subRoutes: [
      {
        path: "user",
        element: <Outlet />,
        subRoutes: [
          {
            path: "list",
            element: (
              <>
                <UserList />
              </>
            ),
          },
          {
            path: "details/:userId",
            element: (
              <>
                <UserDetails />
              </>
            ),
          },
        ],
      },
    ],
  },
];

export const CustomRouter = () => {
  const renderRoutes = (routes: RouterItemProps[]) => {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.subRoutes && renderRoutes(route.subRoutes)}
      </Route>
    ));
  };

  return <Routes>{renderRoutes(ROUTE_CONFIG)}</Routes>;
};
