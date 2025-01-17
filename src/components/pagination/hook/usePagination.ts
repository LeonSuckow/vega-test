/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PaginationInterface,
  UsePaginationData,
  UsePaginationProps,
} from "@/interface/pagination";
import { usersMock } from "@/mock/user";
import { useCallback, useEffect, useState } from "react";

function getUserPaginatedData(data: any[], page: number, pageSize: number) {
  return data.slice((page - 1) * pageSize, page * pageSize);
}

export const usePagination = ({
  data = [],
}: UsePaginationProps): UsePaginationData => {
  const [pagination, setPagination] = useState<PaginationInterface>({
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 1,
    hasNext: false,
    data: data,
  });

  const handleUpdatePagination = useCallback(
    (newPagination: PaginationInterface) => {
      const totalItems = Number(data.length);
      const totalPages = Math.ceil(data.length / newPagination.pageSize);

      const newData = getUserPaginatedData(
        usersMock,
        newPagination.currentPage,
        newPagination.pageSize
      );

      setPagination({
        ...newPagination,
        hasNext: newPagination.currentPage < totalPages,
        currentPage: newPagination.currentPage,
        pageSize: newPagination.pageSize,
        totalItems: totalItems,
        totalPages: totalPages,
        data: newData,
      });
    },
    []
  );

  useEffect(() => {
    handleUpdatePagination(pagination);
  }, []);

  return {
    handleUpdatePagination,
    pagination,
  };
};
