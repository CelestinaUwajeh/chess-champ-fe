export const formatCurrency = (
  number: number,
  { noDecimals }: { noDecimals: boolean }
) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    ...(noDecimals && { maximumFractionDigits: 0 }),
  }).format(number);
