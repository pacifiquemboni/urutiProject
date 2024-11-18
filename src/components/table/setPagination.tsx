import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SetPagination({ globalFilter, pageIndex, pageSize }: any) {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(
      JSON.parse(
        JSON.stringify({
          _pS: pageSize,
          _pI: pageIndex,
          _gF: globalFilter,
        }),
      ),
    );
  }, [globalFilter, pageIndex, pageSize, setSearchParams]);

  return <></>;
}
