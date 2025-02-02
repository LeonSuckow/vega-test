export interface RouterItemProps {
  path: string;
  element: JSX.Element;
  breadcrumbName?: string;
  subRoutes?: RouterItemProps[];
}
