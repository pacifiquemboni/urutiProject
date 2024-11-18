import { RowModel, flexRender } from "@tanstack/react-table";
import css from "../style.module.scss";

export default function TBody<T>({ rowModals }: { rowModals: RowModel<T> }) {
  return (
    <tbody>
      {rowModals?.rows?.map?.((row) => {
        return (
          <tr
            key={row?.id}
            className={`${css.row}`}
            // className={`${css.row} ${row.isSelected || row.isExpanded ? css.selected : ""}`}
          >
            {row?.getVisibleCells?.()?.map?.((cell) => {
              return (
                <td
                  key={cell?.id}
                  className={`${css.datacell}`}
                  // className={`${css.datacell} ${onRowClick ? css.clickable : ""}`}
                >
                  {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
