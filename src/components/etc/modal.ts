import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function useModal(s: string) {
  const [params, setParams] = useSearchParams();
  const isOpen = useMemo(() => params?.get("m") == s, [params, s]);

  const open = useCallback(() => {
    setParams(
      (pa) => {
        pa.delete("m");
        pa.append("m", s);
        return pa;
      },
      { replace: true },
    );
  }, [s, setParams]);

  const close = useCallback(() => {
    setParams(
      (pa) => {
        pa.delete("m");
        return pa;
      },
      { replace: true },
    );
  }, [setParams]);

  return { isOpen, open, close };
}
