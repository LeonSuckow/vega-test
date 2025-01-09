import { usePagination } from "@/components/pagination/hook/usePagination";
import { paginatedUsersMock } from "@/mock/user";
import { useEffect, useState } from "react";

export const useUserPage = () => {
  const { pagination, handleUpdatePagination } =
    usePagination(paginatedUsersMock);

  const [users, setUsers] = useState(paginatedUsersMock.data);

  useEffect(() => {
    setUsers(pagination.data);
  }, [pagination.data]);

  return {
    users: users ?? [],
    pagination,
    handleUpdatePagination,
  };
};
