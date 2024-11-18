import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function useQueryPages(pageName: string = "page") {
  const [params, setParams] = useSearchParams();
  const opened = useMemo(() => params?.get(pageName), [pageName, params]);

  const openPage = useCallback(
    (page: string) => {
      setParams(
        (pa) => {
          pa.delete(pageName);
          pa.append(pageName, page);
          return pa;
        },
        { replace: true },
      );
    },
    [pageName, setParams],
  );

  const closePage = useCallback(() => {
    setParams(
      (pa) => {
        pa.delete(pageName);
        return pa;
      },
      { replace: true },
    );
  }, [pageName, setParams]);

  const isOpen = useCallback(
    (values: string | (string | null)[]) => {
      return Array.isArray(values) ? values?.includes?.(opened) : values == opened;
    },
    [opened],
  );

  return { openPage, closePage, opened, isOpen };
}
