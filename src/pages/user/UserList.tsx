import { UserListProps } from "@/interface/user";
import { DataTable } from "../../components/DataTable";
import { columns } from "./column/UserColumn";

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <DataTable columns={columns} data={users} />
    </>
  );
};
