"use client";
import Link from "next/link";
import NavLink from "./ui/nav-link";
import { cn } from "@/lib/utils";

type TPageTitleAndReturnLink = {
  title: string;
  text: string;
  href: string;
  className?: string;
};

const LinkReturnHome = (
  { title, text, href, className, ...props }: TPageTitleAndReturnLink,
) => {
  return (
    <>
      <h1>{title}</h1>
      <Link
        href={href}
        {...props}
        className={cn(
          className,
          {},
          "text-gray-500 no-underline transition-colors duration-200 ease-in-out hover:text-white ",
        )}
      >
        <div className="flex items-start justify-start gap-2">
          {text}
        </div>
      </Link>
    </>
  );
};

export default LinkReturnHome;
