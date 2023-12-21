import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TCard = {
  children: ReactNode;
  className?: string;
};
export default function Card({ children, className }: TCard) {
  return (
    <div
      className={cn(
        "group flex-auto rounded-lg p-3 border bg-card dark:group-hover:bg-gray-900/70 transition-all duration-150 group-hover:border-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
}
