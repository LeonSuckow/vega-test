import { PaginationInterface, UsePaginationData } from "@/interface/pagination";
import { paginateUsersMock } from "@/mock/user";
import { useCallback, useState } from "react";

export const usePagination = ({
  data = [],
  currentPage,
  pageSize,
  totalItems,
  totalPages,
}: PaginationInterface): UsePaginationData => {
  const [pagination, setPagination] = useState<PaginationInterface>({
    currentPage: currentPage,
    pageSize: pageSize,
    totalItems: totalItems,
    totalPages: totalPages,
    hasNext: currentPage < totalPages,
    data: data,
  });

  const handleUpdatePagination = useCallback(
    (newPagination: PaginationInterface) => {
      // const totalItems = Number(data.length);
      // const totalPages = Math.ceil(data.length / newPagination.pageSize);

      const newData =
        paginateUsersMock[
          newPagination.currentPage as keyof typeof paginateUsersMock
        ];
      setPagination({
        ...newPagination,
        hasNext: newData.currentPage < newData.totalPages,
        currentPage: newData.currentPage,
        pageSize: newData.pageSize,
        totalItems: newData.totalItems,
        totalPages: newData.totalPages,
        data: newData.data,
      });
    },
    []
  );

  return {
    handleUpdatePagination,
    pagination,
  };
};
