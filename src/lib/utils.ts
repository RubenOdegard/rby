import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format the a datestring to return MMM YYY.
export const formatMonthYear = (dateString: string) => {
  const options = { year: "numeric", month: "short" } as const;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

// Helper function to check if the current date is before, during or after.
export const getActivityStatus = (startDate: string, endDate: string) => {
  if (Number.isNaN(startDate) || Number.isNaN(endDate)) {
    return null;
  }

  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  if (currentDate > endDateObj) {
    return "completed";
  } else if (currentDate >= startDateObj && currentDate <= endDateObj) {
    return "ongoing";
  } else if (currentDate <= startDateObj && currentDate <= endDateObj) {
    return "planned";
  } else {
    return null;
  }
};

// get future date 3 months ahead of time.
export const getFutureMonth = (): string => {
  const currentDate = new Date();
  const futureMonth = new Date(currentDate);
  futureMonth.setMonth(currentDate.getMonth() + 3);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(futureMonth);
};
