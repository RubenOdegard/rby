import { cn, getFutureMonth } from "@/lib/utils";
import { ClassValue } from "clsx";

export default function AvailableForWork(
  { className }: { className?: ClassValue },
) {
  const month = getFutureMonth();
  return (
    <div className={cn("", className)}>
      Available for full-time work in <b>{month}.</b>
    </div>
  );
}
