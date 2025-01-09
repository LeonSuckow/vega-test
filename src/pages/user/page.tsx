import { Pagination } from "@/components/pagination/Pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Layout } from "../../layout/Layout";
import { useUserPage } from "./hook/useUserPage";
import { UserList } from "./UserList";
export const UserPage = () => {
  const { users, pagination, handleUpdatePagination } = useUserPage();
  const [pageSize, setPageSize] = useState("5");
  return (
    <>
      <Layout>
        <>
          <h1 className="text-2xl font-bold mb-[4.875rem]">Usuários</h1>
          <div className="p-6 flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-1 items-center justify-center">
                <span className="text-base font-bold">20</span>
                <span>usuários cadastrados</span>
              </div>
              <div className="flex gap-4 items-center">
                <Select
                  value={pageSize}
                  onValueChange={(value) => {
                    setPageSize(value);
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
            <UserList users={users} />

            <Pagination
              pagination={pagination}
              handleUpdatePagination={handleUpdatePagination}
            />
          </div>
        </>
      </Layout>
    </>
  );
};
