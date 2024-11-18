import { MouseEventHandler, useCallback } from "react";
import css from "./style.module.scss";

export default function ExpandHeader({ row }: any) {
  const toggleRowExpandedProps = row.getToggleRowExpandedProps();

  const onClick = useCallback<MouseEventHandler<HTMLSpanElement>>(
    async (event) => {
      toggleRowExpandedProps.onClick(event);
    },
    [toggleRowExpandedProps],
  );

  return (
    <div {...toggleRowExpandedProps} className={css.expandBox} onClick={onClick}>
      {row.canExpand ? (
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
