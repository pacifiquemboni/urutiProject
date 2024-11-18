import { useMemo } from "react";
import {
  Column,
  Row,
  useTable,
  useGlobalFilter,
  HeaderGroup,
  useRowSelect,
  TableInstance,
} from "react-table";
import { Input } from "../form";

type customTableProps<T extends object> = {
  loading: boolean;
  headerGroups: HeaderGroup<T>[];
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  data: readonly T[];
  selectedRows: Row<T>[];
};

type props<T extends object> = {
  data: T[];
  columns: Column<T>[];
  loading: boolean;
  children: (props: customTableProps<T>) => JSX.Element;
  rowId?: (row: Row<T>) => string | number | any;
  initialSelected?: (string | number | any)[];
};

export default function SearchList<T extends object>({
  data,
  columns,
  loading,
  children,
  rowId,
  initialSelected = [],
}: props<T>) {
  const sortedColumns = useMemo(() => [...columns], [columns]);
  const sortedData = useMemo<readonly T[]>(() => [...data], [data]);

  const TableInstance = useTable<T>(
    {
      columns: sortedColumns,
      data: sortedData,
      initialState: { selectedRowIds: [...initialSelected] } as any,
    },
    useGlobalFilter,
    useRowSelect,
    (hooks) => {
      if (typeof rowId == "function")
        hooks.useInstance.push(({ rows: instanceRows }) => {
          instanceRows.forEach((row) => {
            row.id = rowId(row);
          });
        });
    },
  );

  const {
    rows,
    data: allData,
    headerGroups,
    state,
    prepareRow,
    setGlobalFilter,
    selectedFlatRows,
  } = useMemo<TableInstance<T> | any>(() => TableInstance, [TableInstance]);

  return (
    <div>
      <Input
        defaultValue={(state as any)?.globalFilter}
        placeholder={"Search"}
        // className={css.filterInput}
        onChange={(e) => {
          setGlobalFilter(e.target.value);
        }}
      />
      {children({
        data: allData,
        headerGroups,
        rows,
        loading,
        selectedRows: selectedFlatRows,
        prepareRow,
      })}
    </div>
  );
}
