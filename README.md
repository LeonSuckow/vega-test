# Live coding teste Vega I.T.

Vaga para Desenvolvedor Frontend Pleno na Vega I.T.
Não consegui entregar no prazo, mas terminei posteriormente apenas para não deixar incompleto.

# Tempo de live coding

1 hora e 30 minutos.

# Descrição do Desafio

Você deverá criar um layout com base no ~~Figma link~~ para exibir dados paginados de uma lista de usuários com as seguintes funcionalidades:

1. **Fidelidade ao protótipo**
2. **Paginação dos dados**
3. **Tela com informações detalhadas sobre o usuário**
4. **Opção para editar o usuário**
5. **Toast de sucesso**: ao editar, deve ser exibido um toast informando o sucesso da alteração.
6. **Tela de Visualizar Usuário**: não deve permitir a interação com nenhum dado.

## Critérios para Aceitação

1. Deve ser possível navegar entre as telas.
2. Deve ser possível realizar a paginação dos dados.
3. Deve ser possível editar os valores.
4. Ao editar um usuário, deve ser exibido um alerta informando o sucesso da operação.
5. Na tela de visualizar usuário, não deve ser possível interagir com os dados.

## Exemplo de JSON

```javascript
const paginatedUsersMock = {
  currentPage: 1,
  totalPages: 3,
  pageSize: 5,
  totalItems: 15,
  data: [
    {
      username: "john_doe",
      email: "john.doe@example.com",
      language: "English",
      gender: "Male",
    },
    {
      username: "jane_smith",
      email: "jane.smith@example.com",
      language: "Portuguese",
      gender: "Female",
    },
    {
      username: "alex_taylor",
      email: "alex.taylor@example.com",
      language: "Spanish",
      gender: "Non-binary",
    },
    {
      username: "mike_jones",
      email: "mike.jones@example.com",
      language: "German",
      gender: "Male",
    },
    {
      username: "sara_connor",
      email: "sara.connor@example.com",
      language: "French",
      gender: "Female",
    },
  ],
};

const paginatedUsersMockPage2 = {
  currentPage: 2,
  totalPages: 3,
  pageSize: 5,
  totalItems: 15,
  data: [
    {
      username: "lee_walker",
      email: "lee.walker@example.com",
      language: "Chinese",
      gender: "Non-binary",
    },
    {
      username: "anna_davis",
      email: "anna.davis@example.com",
      language: "Italian",
      gender: "Female",
    },
    {
      username: "tom_harper",
      email: "tom.harper@example.com",
      language: "English",
      gender: "Male",
    },
    {
      username: "linda_brown",
      email: "linda.brown@example.com",
      language: "Portuguese",
      gender: "Female",
    },
    {
      username: "james_white",
      email: "james.white@example.com",
      language: "Spanish",
      gender: "Male",
    },
  ],
};

const paginatedUsersMockPage3 = {
  currentPage: 3,
  totalPages: 3,
  pageSize: 5,
  totalItems: 15,
  data: [
    {
      username: "olivia_clark",
      email: "olivia.clark@example.com",
      language: "French",
      gender: "Female",
    },
    {
      username: "lucas_evans",
      email: "lucas.evans@example.com",
      language: "German",
      gender: "Male",
    },
    {
      username: "mia_adams",
      email: "mia.adams@example.com",
      language: "Italian",
      gender: "Female",
    },
    {
      username: "noah_scott",
      email: "noah.scott@example.com",
      language: "Chinese",
      gender: "Non-binary",
    },
    {
      username: "emma_hill",
      email: "emma.hill@example.com",
      language: "English",
      gender: "Female",
    },
  ],
};
```
