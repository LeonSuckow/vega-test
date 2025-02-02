import { DataTable } from "../../../components/data-table";
import { columns } from "./config/datatable/user-columns";

import { Pagination } from "@/components/pagination/pagination";

import { Card } from "@/components/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserPage } from "./hook/use-user-page";

export const UserList = () => {
  const { users, pagination, handleUpdatePagination } = useUserPage();
  return (
    <>
      <h1 className="text-2xl font-bold mb-[2.5rem] text-vega-gray-800">
        Usuários
      </h1>
      <Card>
        <>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center justify-center">
              <span className="text-base font-bold">
                {pagination.totalItems}
              </span>
              <span>usuários cadastrados</span>
            </div>
            <div className="flex gap-4 items-center">
              <Select
                value={pagination.pageSize.toString()}
                onValueChange={(value) => {
                  handleUpdatePagination({
                    ...pagination,
                    pageSize: Number(value),
                  });
                }}
              >
                <SelectTrigger className="w-[4.0625rem]">
                  <SelectValue placeholder="Select count per page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span>itens por página</span>
            </div>
          </div>
          <div className="gap-6 flex flex-col justify-between">
            <DataTable columns={columns} data={users} />

            <Pagination
              pagination={pagination}
              handleUpdatePagination={handleUpdatePagination}
            />
          </div>
        </>
      </Card>
    </>
  );
};
