import { MouseEventHandler, useCallback } from "react";
import css from "./style.module.scss";

export default function ExpandRow({ row, onExpand }: any) {
  const toggleRowExpandedProps = row.getToggleRowExpandedProps({
    style: {
      paddingLeft: `${row.depth}rem`,
    },
  });

  const onClick = useCallback<MouseEventHandler<HTMLSpanElement>>(
    async (event) => {
      if (typeof onExpand == "function" && !row.isExpanded) await onExpand({ row });
      toggleRowExpandedProps.onClick(event);
    },
    [onExpand, row, toggleRowExpandedProps],
  );

  return (
    <div {...toggleRowExpandedProps} className={css.expandBox} onClick={onClick}>
      {row.canExpand || typeof onExpand == "function" ? (
        <span
          className={`${css.span}`}
          style={{
            rotate: `${row.isExpanded ? 90 : 0}deg`,
          }}
        >
          ➤
        </span>
      ) : (
        <span>⚈</span>
      )}
    </div>
  );
}
