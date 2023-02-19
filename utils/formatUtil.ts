import { format } from "date-fns";

export const formatDate = (date: Date) => {
  const { setting } = useAppSetting();
  const { formatDate: pattern } = setting.value;
  return format(date, `${pattern ?? "yyyy-MM-dd"}`);
};

export function formatCurrency(number: number) {
  const { setting } = useAppSetting();
  const { symbol = "", decimal = 2 } = setting.value;

  // Round to two decimal places
  number = Number(number.toFixed(Number(decimal)));

  // Add comma separators for thousands
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Concatenate kip symbol and return
  return `${symbol}` + parts.join(".");
}

export function formatNumber(number: number) {
  const { setting } = useAppSetting();
  const { decimal = 2 } = setting.value;

  // Round to two decimal places
  number = Number(number.toFixed(Number(decimal)));

  // Add comma separators for thousands
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Concatenate kip symbol and return
  return parts.join(".");
}
