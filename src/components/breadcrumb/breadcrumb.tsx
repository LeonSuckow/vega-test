import { useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { buildBreadcrumbs } from "./config/breadcrumb-config";

export const BreadCrumb = () => {
  const location = useLocation();
  const breadcrumb = buildBreadcrumbs(location.pathname);
  if (!breadcrumb) return null;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.history.map((crumb, index) => (
          <BreadcrumbItem key={crumb.url}>
            {crumb.url ? (
              <BreadcrumbLink href={crumb.url}>{crumb.name}</BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
            )}
            {index < breadcrumb.history.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
