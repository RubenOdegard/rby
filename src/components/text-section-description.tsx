import { cn } from "@/lib/utils";
import React from "react";

export interface TextSectionDescriptionProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const TextSectionDescription = (
  { className, children, ...props }: TextSectionDescriptionProps,
) => {
  return (
    <div
      className={cn(
        "text-balance mt-1 max-w-xl text-lg font-light text-gray-500",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TextSectionDescription;
