import { toast } from "react-toastify";

export const formatCurrency = (
  number: number,
  { noDecimals }: { noDecimals: boolean }
) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    ...(noDecimals && { maximumFractionDigits: 0 }),
  }).format(number);

export const showToast = ({
  message,
  type,
}: {
  message: string;
  type: "error" | "success" | "warning" | "info" | "default" | "loading";
}) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    type: type !== "loading" ? type : "default",
  });
};
