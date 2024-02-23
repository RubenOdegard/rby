import { cn } from "@/lib/utils";
import React from "react";

export interface TextSectionHeaderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const TextSectionHeader = (
  { className, children, ...props }: TextSectionHeaderProps,
) => {
  return (
    <h2
      className={cn("border-none text-3xl font-bold mb-0 pb-0", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default TextSectionHeader;
