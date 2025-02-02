import { ColumnDef } from "@tanstack/react-table";

import { User } from "@/interface/user";
import { UserListActions } from "../../components/list-actions";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <UserListActions user={row.original} />;
    },
  },
];
