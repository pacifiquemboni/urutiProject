import { Column, HeaderGroup } from "@tanstack/react-table";

export type GetDataOptions = {
  filters?: {
    [key: string]: any;
  };
  pagination?: {
    option?: -2 | -1 | 0 | 1 | 2;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
    total: number;
  };
};

export type getDataType = {
  type: "pagination" | "export" | "filter" | "refresh";
  options: GetDataOptions;
};

export type asideProps<T> = {
  columns: Column<T>[];
  headerGroups: HeaderGroup<T>[];
  onFilter?: (filters: any) => any;
};
