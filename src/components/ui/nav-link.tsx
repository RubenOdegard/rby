import Link, { LinkProps } from "next/link";
import { useEffect, useState } from "react";

import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: ClassValue;
  onClick?: () => void;
}

export default function NavLink(
  { href, children, className, ...props }: NavLinkProps,
) {
  // get current path and initialize state for aria-current
  const pathname = usePathname();
  const [ariaCurrent, setAriaCurrent] = useState<string | undefined>();

  // conditionally set aria-current to "page" if the current path matches with the href of the link component.
  // when aria-current is set to "page", it tells the browser and screenreaders that this is the active page.
  useEffect(() => {
    const newAriaCurrent = href === pathname ? "page" : undefined;
    setAriaCurrent(newAriaCurrent);
  }, [pathname, href]);

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        className,
        {
          "my-2 text-5xl font-extrabold text-yellow-400":
            ariaCurrent === "page",
          "my-0.5 text-4xl font-light text-gray-400": ariaCurrent !== "page",
        },
        "no-underline transition-colors duration-200 ease-in-out hover:text-white ",
      )}
      aria-current={ariaCurrent as "page"}
    >
      <div className="flex items-center justify-center gap-2">
        {ariaCurrent === "page" ? <ArrowRight size={16} className="" /> : null}
        {children}
      </div>
    </Link>
  );
}
