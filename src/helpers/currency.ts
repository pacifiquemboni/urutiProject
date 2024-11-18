export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Rwf = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "Rwf",
  minimumFractionDigits: 2,
});

export const Tsh = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "TSH",
  minimumFractionDigits: 2,
});

export function currency(cur: string, options: Intl.NumberFormatOptions = {}) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: cur,
      ...options,
    });
  } catch (error) {
    console.warn(error);

    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "Rwf",
    });
  }
}
