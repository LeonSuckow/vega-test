export const BREADCRUMB_HISTORY_LIMIT = 3;

export const BREADCRUMB_CONFIG = {
  "/user/list": {
    name: "Lista de Usuários",
    history: [{ name: "Home", url: "/" }],
  },
  "/user/details/:userId": {
    name: "Detalhes do usuário",
    history: [
      { name: "Home", url: "/" },
      { name: "Lista de Usuários", url: "/user/list" },
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
    // Limita o histórico conforme a configuração
    const limitedHistory = breadcrumb.history.slice(-BREADCRUMB_HISTORY_LIMIT);

    // Atualiza o histórico, substituindo o último item com o nome da rota atual
    const updatedHistory = [
      ...limitedHistory,
      { name: breadcrumb.name, url: undefined }, // Último item não precisa de link
    ];

    return { ...breadcrumb, history: updatedHistory };
  }

  return null;
};
