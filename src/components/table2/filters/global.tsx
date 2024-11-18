import { SearchIcon } from "@/assets/icons";
import Button from "@/components/button";
import { Input } from "@/components/form";
import { useCallback, useEffect, useState } from "react";

type props = {
  globalFilter?: string;
  searchBoxLabel?: string;
  setGlobalFilter?: (a?: string) => void;
  onSearch?: ({ data, value }: { data?: any[]; value?: string | undefined }) => void;
  toSearch?: boolean;
  setToSearch?: any;
  searchedList?: any[];
};

export default function GlobalFilter({
  globalFilter = "",
  searchBoxLabel,
  setGlobalFilter = () => {},
  onSearch,
  setToSearch,
  searchedList,
}: props) {
  const [q, setQ] = useState("");

  // search global
  const searchData = useCallback(
    (str: string) => {
      if (!onSearch) return;

      if (str) setToSearch(true);
      onSearch({ value: str });
    },
    [onSearch, setToSearch],
  );

  useEffect(() => {
    if ((!searchedList && setToSearch) || !q) setToSearch(false);
  }, [q, searchedList, setToSearch]);

  return (
    <span className="flex">
      <Input
        defaultValue={globalFilter}
        placeholder={searchBoxLabel || "Search"}
        // className={css.filterInput}
        onChange={(e) => {
          setGlobalFilter(e.target.value);
          setQ(e.target.value);
        }}
      />
      {onSearch && (
        <Button size="xsm" onClick={() => searchData && searchData(globalFilter)}>
          <SearchIcon />
        </Button>
      )}
    </span>
  );
}
