"use client";

import NavLinkLogo from "@/components/ui/nav-link-logo";
import NavMenu from "./nav-menu";

const LayoutNav = () => {
  return (
    <>
      <nav
        className={
          "mx-auto flex h-16 items-center justify-between px-4 transition-all duration-200 ease-in-out md:px-16 lg:max-w-7xl lg:px-24"
        }
      >
        <span
          className={
            "text-xl font-extrabold transition-all duration-200 ease-in-out"
          }
        >
          <NavLinkLogo
            href="/"
            className="flex items-center gap-1 no-underline"
          >
            <span className="ml-2 font-extralight">Ruben</span>
            <span className="font-normal text-yellow-400">Odegard</span>
          </NavLinkLogo>
        </span>
        <NavMenu />
      </nav>
    </>
  );
};

export default LayoutNav;
