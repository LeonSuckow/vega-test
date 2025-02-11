import { usePagination } from "@/components/pagination/hook/usePagination";
import { GLOBAL_TEXT } from "@/config/pt";
import { usersMock } from "@/mock/user";
import { useEffect, useState } from "react";

export const useUserPage = () => {
  const { pagination, handleUpdatePagination } = usePagination({
    data: usersMock,
  });

  const [users, setUsers] = useState(pagination.data);
  const listTitle = GLOBAL_TEXT.PAGES.USER.LIST.TITLE;

  useEffect(() => {
    setUsers(pagination.data);
  }, [pagination.data]);

  return {
    users: users ?? [],
    pagination,
    handleUpdatePagination,
    listTitle,
  };
};
