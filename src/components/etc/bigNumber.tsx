import { formatBigNumber, formatNumber } from "@helpers/numbers";
import { useCallback, useState } from "react";

export default function BigNumber({
  value,
  clickToggle,
}: {
  value: number;
  clickToggle?: boolean;
}) {
  const [c, setC] = useState(false);

  const click = useCallback(() => {
    clickToggle ? setC((p) => !p) : setC(false);
  }, [clickToggle]);

  return <span onClick={click}>{!c ? formatBigNumber(Number(value)) : formatNumber(value)}</span>;
}
