import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TimeGenerator = {
  startTime: number;
  endTime: number;
};

export function generateTimeArray({
  startTime,
  endTime,
}: TimeGenerator): string[] {
  if (
    startTime < 0 ||
    startTime > 23 ||
    endTime < 0 ||
    endTime > 23 ||
    endTime <= startTime
  ) {
    throw new Error(
      "Invalid input. startTime and endTime must be between 0 and 23, and endTime must be greater than startTime."
    );
  }
  const timeArray: string[] = [];
  for (let i = startTime; i <= endTime; i++) {
    const hour12 = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? " AM" : " PM";
    timeArray.push(`${hour12}${period}`);
  }

  return timeArray;
}
