import css from "./style.module.scss";

type props = {
  headerGroups: any;
};

export default function THead({ headerGroups }: props) {
  return (
    <thead>
      {headerGroups.map((headerGroup: any) => {
        const { key, ...props } = headerGroup.getHeaderGroupProps();

        return (
          <tr key={key} {...props} className={css.head_row}>
            {headerGroup.headers.map((column: any) => {
              const { key, ...props } = column.getHeaderProps(column.getSortByToggleProps());
              props.style = { ...props?.style, ...column?.style };

              return (
                <th
                  key={key}
                  className={`${column.isSorted ? css.sorted : ""} 
                  ${column.isSortedDesc ? css.desc : ""} ${css.thead}
                  ${column.columns?.length ? css.parent_header : ""}`}
                  {...props}
                >
                  <span>{column.render("Header")}</span>
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
}
