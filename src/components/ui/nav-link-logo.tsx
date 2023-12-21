import Link, { LinkProps } from "next/link";
import { useEffect, useState } from "react";

import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export default function NavLinkLogo(
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
      className={cn(className, {
        "font-extrabold text-foreground": ariaCurrent === "page",
        "font-extrabold no-underline text-foreground": ariaCurrent !== "page",
      }, "hover:text-foreground transition-colors duration-200 ease-in-out")}
      aria-current={ariaCurrent as "page"}
    >
      {children}
    </Link>
  );
}
