export const GLOBAL_TEXT = {
  RESOURCE: {
    USER: "Usuário",
    TEAM: "Equipe",
    PAGE: "Página",
    PROFILE: "Perfil",
  },
  PAGES: {
    USER: {
      LIST: {
        TITLE: "Usuários",
        DATATABLE: {
          ACTIONS: {
            EDIT: "Editar",
            DETAILS: "Visualizar",
          },
        },
      },
      DETAILS: {
        TITLE: "Visualizar usuário",
      },
      EDIT: {
        TITLE: "Editar usuário",
      },
    },
  },
  TOAST: {
    CREATED: "{{recurso}} criado(a)",
    UPDATED: `{{recurso}} atualizado(a)`,
    DELETED: "{{recurso}} excluido(a)",
    CHANGED: "{{recurso}} alterado(a)",
    WITHOUT_PERMISSION: "{{recurso}} sem permissão",
  },
  SIDEBAR: {
    NAV_USER: {
      TITLE: "Alterar Perfil",
      LOGOUT: "Sair",
    },
  },
};

export const replaceText = (
  objectKey: Record<string, string>,
  textToReplace: string = ""
) => {
  if (!textToReplace) return "";
  let message = "";
  for (const [key, value] of Object.entries(objectKey)) {
    message = textToReplace.replace(`{{${key}}}`, value);
  }
  return message;
};
