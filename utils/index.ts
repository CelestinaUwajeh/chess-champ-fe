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

export const theclasses = [
  {
    id: 1,
    name: "John Doe",
    module: 3,
    time: "9AM-10AM",
  },
  {
    id: 2,
    name: "Mariam Jae",
    module: 3,
    time: "9AM-10AM",
  },
  {
    id: 3,
    name: "Wale Cole",
    module: 2,
    time: "9AM-10AM",
  },
];
