export const BREADCRUMB_HISTORY_LIMIT = 3;

export const BREADCRUMB_CONFIG = {
  "/user/list": {
    name: "Lista de usuários",
    history: [{ name: "Home", url: "/" }],
  },
  "/user/details/:userId": {
    name: "Detalhes do usuário",
    history: [
      { name: "Home", url: "/" },
      { name: "Lista de usuários", url: "/user/list" },
    ],
  },
};

export const resolveDynamicPath = (
  pattern: string,
  currentPath: string
): string => {
  // Transforma o pattern de rota em uma expressão regular
  const regexPattern = "^" + pattern.replace(/:\w+/g, "([^/]+)") + "$";
  const regex = new RegExp(regexPattern);

  return regex.test(currentPath) ? pattern : "";
};

export const buildBreadcrumbs = (currentPath: string) => {
  const resolvedPattern = Object.keys(BREADCRUMB_CONFIG).find((pattern) =>
    resolveDynamicPath(pattern, currentPath)
  );

  if (!resolvedPattern) return null;

  const breadcrumb =
    BREADCRUMB_CONFIG[resolvedPattern as keyof typeof BREADCRUMB_CONFIG];

  if (breadcrumb) {
    const limitedHistory = breadcrumb.history.slice(-BREADCRUMB_HISTORY_LIMIT);

    const updatedHistory = [
      ...limitedHistory,
      { name: breadcrumb.name, url: undefined },
    ];

    return { ...breadcrumb, history: updatedHistory };
  }

  return null;
};
