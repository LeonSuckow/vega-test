import { RouterItemProps } from "@/interface/route";
import { Route, Routes } from "react-router";
import { ROUTE_CONFIG } from "./config/route-config";

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
