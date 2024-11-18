import { Fragment, ReactNode } from "react";
import css from "../style.module.scss";
import { asideProps } from "..";
import { Popover } from "antd";
import { IconFilterSearch } from "@tabler/icons-react";

type props = {
  filters: any[];
  AsideNode?: (data: asideProps<any>) => ReactNode;
  asideProps?: asideProps<any>;
  hideFilter?: boolean;
  onFilter?: (filters: any) => any;
};

export default function AsideFilters({
  filters,
  AsideNode,
  asideProps,
  hideFilter,
  onFilter,
}: props) {
  return (
    <aside className={`${css.aside} ${!filters.length ? css.hide : ""}`}>
      <Popover
        mouseLeaveDelay={1}
        placement="bottomLeft"
        content={
          <nav className="min-w-[min(35ch,100dvw_-_1.5rem)]">
            {!hideFilter && typeof AsideNode == "function" && asideProps ? (
              <AsideNode {...asideProps} onFilter={onFilter} />
            ) : (
              <section>
                {filters?.map((column: any) => {
                  if (!(column.canFilter && column.Filter)) return;
                  const { key } = column.getHeaderProps(column.getSortByToggleProps());
                  return <Fragment key={key}>{column.render("Filter")}</Fragment>;
                })}
              </section>
            )}
          </nav>
        }
        color="white"
      >
        <div className={`${css.bars} px-4 w-fit`}>
          <IconFilterSearch />
        </div>
      </Popover>
    </aside>
  );
}
