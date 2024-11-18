import { ReactNode } from "react";
import css from "../style.module.scss";
import { asideProps } from "../types";
import { Popover } from "antd";
import { IconFilterSearch } from "@tabler/icons-react";

type props<T> = {
  // filters: any;
  AsideNode?: (data: asideProps<T>) => ReactNode;
  asideProps?: asideProps<T>;
  hideFilter?: boolean;
  onFilter?: (filters: any) => any;
};

export default function AsideFilters<T>({
  // filters,
  AsideNode,
  asideProps,
  hideFilter,
  onFilter,
}: props<T>) {
  return (
    !hideFilter &&
    typeof AsideNode == "function" &&
    asideProps && (
      <aside className={`${css.aside}`}>
        <Popover
          mouseLeaveDelay={1}
          placement="bottomLeft"
          content={
            <nav className="min-w-[min(35ch,100dvw_-_1.5rem)]">
              <AsideNode {...asideProps} onFilter={onFilter} />
              {/* {!hideFilter && typeof AsideNode == "function" && asideProps ? (
                <AsideNode {...asideProps} onFilter={onFilter} />
              ) : (
                <section>
                {filters?.map((column: any) => {
                  if (!(column.canFilter && column.Filter)) return;
                  const { key } = column.getHeaderProps(column.getSortByToggleProps());
                  return <Fragment key={key}>{column.render("Filter")}</Fragment>;
                })}
              </section>
            )} */}
            </nav>
          }
          color="white"
        >
          <div className={`${css.bars} px-4 w-fit`}>
            <IconFilterSearch />
          </div>
        </Popover>
      </aside>
    )
  );
}
