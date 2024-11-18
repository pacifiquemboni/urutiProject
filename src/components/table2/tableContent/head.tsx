import { Header, HeaderGroup, flexRender } from "@tanstack/react-table";
import css from "../style.module.scss";

export default function THead<T>({ headerGroups }: { headerGroups: HeaderGroup<T>[] }) {
  return (
    <thead>
      {headerGroups?.map?.((headerGroup) => {
        return (
          <tr key={headerGroup?.id} className={css.head_row}>
            {headerGroup?.headers?.map?.((column) => <Th key={column?.id} column={column} />)}
          </tr>
        );
      })}
    </thead>
  );
}

function Th<T>({ column }: { column: Header<T, unknown> }) {
  return (
    <th
      colSpan={column?.colSpan}
      className={`${css.thead} ${column?.column?.getIsSorted() ? css.sorted : ""} ${column?.column?.getIsSorted() == "desc" ? css.desc : ""}`}
      onClick={column.column.getToggleSortingHandler()}
    >
      {column?.isPlaceholder ? null : (
        <span>{flexRender(column?.column?.columnDef?.header, column?.getContext())}</span>
      )}
    </th>
  );
}
