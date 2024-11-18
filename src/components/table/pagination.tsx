import { Select } from "../form";
import Button from "../button";
import css from "./style.module.scss";
import { useCallback, useMemo } from "react";
import { BackIcon, DownloadIcon2 } from "@/assets/icons";

function DataPagination({
  pageOptions,
  canNextPage,
  canPreviousPage,
  pageSize,
  setPageSize,
  gotoPage,
  previousPage,
  nextPage,
  pageIndex,
  currentSize,
  totalResults,
  loading,
  getMore,
  hidePageSizeSelector,
  customPaginationActions: Cpa,
  currentPage,
}: any) {
  const more = useCallback(
    async (n: number) => {
      const current = pageIndex;
      await getMore?.(n);
      gotoPage(current);
    },
    [getMore, gotoPage, pageIndex],
  );

  const min = useMemo(
    () => (Number(currentPage) - 1 || pageIndex) * pageSize + 1,
    [currentPage, pageIndex, pageSize],
  );
  const pageMax = useMemo(() => min - 1 + currentSize, [currentSize, min]);

  return (
    <div className={css.footer}>
      {pageOptions.length >= 0 && (
        <div className={`${css.pagination}`}>
          <Button
            size="xsm3"
            type="button"
            className={`${css.button}`}
            onClick={() => (Cpa ? more(-1) : previousPage())}
            disabled={Cpa ? min <= 1 : !canPreviousPage}
          >
            <BackIcon className={`${css.icon}`} />
          </Button>
          <Button
            size="xsm3"
            type="button"
            onClick={() => {
              if (!Cpa && (!getMore || canNextPage || loading)) nextPage();
              else more(1);
            }}
            disabled={Cpa ? pageMax >= totalResults : !canNextPage && (!getMore || loading)}
            className={`${css.button}`}
          >
            {Cpa || !getMore || canNextPage || loading ? (
              <BackIcon className={`${css.icon} ${css.right}`} />
            ) : (
              <DownloadIcon2 className={`${css.icon}`} />
            )}
          </Button>
          <div className={`${css.rightSide}`}>
            <span>
              Page{" "}
              <span>
                {min} - {pageMax}
              </span>{" "}
              <span>of {totalResults}</span>
            </span>
            {!hidePageSizeSelector && (
              <Select
                defaultValue={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className={`${css.input}`}
                options={[3, 5, 10, 15, 25, 50, 100, 250, 300, 500, 1000].map((pgSize) => ({
                  text: `Show ${pgSize}`,
                  value: pgSize,
                }))}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DataPagination;
