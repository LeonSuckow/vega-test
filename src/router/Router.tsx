import { Route, Routes } from "react-router";
import { UserPage } from "../pages/user/page";

interface RouterItemProps {
  path: string;
  element: JSX.Element;
  subRoutes?: RouterItemProps[];
}
const ROUTE_CONFIG: RouterItemProps[] = [
  {
    path: "/dashboard",
    element: (
      <>
        <h1>Dashboard</h1>
      </>
    ),
  },
  {
    path: "/",
    element: <UserPage />,
    subRoutes: [
      {
        path: "/user/:id",
        element: (
          <>
            <h1>Usuário Tal</h1>
          </>
        ),
      },
    ],
  },
];

export const CustomRouter = () => {
  const routes = Object.values(ROUTE_CONFIG);
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.subRoutes?.map((subRoute) => {
                return (
                  <Route
                    key={subRoute.path}
                    path={subRoute.path}
                    element={subRoute.element}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};
