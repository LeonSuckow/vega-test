/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UsePaginationData {
  pagination: PaginationInterface;
  handleUpdatePagination: (newPagination: PaginationInterface) => void;
}

export interface PaginationInterface {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNext?: boolean;

  data?: any[];
}

export interface PaginationProps {
  handleUpdatePagination: (newPagination: PaginationInterface) => void;
  pagination: PaginationInterface;
}

export interface UsePaginationData {
  handleUpdatePagination: (newPagination: PaginationInterface) => void;
  pagination: PaginationInterface;
}
