import { currency as cur } from "@helpers/currency";
import { useMemo } from "react";

type props = { amount: number; currency?: string; currencySize?: string };

export default function Currency({ amount = 0, currency = "Tsh", currencySize }: props) {
  const out = useMemo(() => cur(currency).formatToParts(amount), [amount, currency]);

  return out.map((w, i) => (
    <span key={i} className={i == 0 ? currencySize || "text-xs" : ""}>
      {w.value}
    </span>
  ));
}
