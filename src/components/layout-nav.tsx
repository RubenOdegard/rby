"use client";

import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/modal-contact-me";
import HorizontalDivider from "@/components/ui/h-divider";
import { ToggleTheme } from "@/components/toggle-theme";
import NavLink from "@/components/ui/nav-link";
import NavLinkLogo from "@/components/ui/nav-link-logo";
import { navLinks } from "@/config/config";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { XIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LayoutNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      // temp disable
      // setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const handleNavLinkClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between md:px-12 lg:max-w-4xl mx-auto px-4 lg:px-0 ${
          scrollPosition > 0 ? "h-10" : "h-16"
        } transition-all duration-200 ease-in-out`}
      >
        <span
          className={`font-extrabold ${
            scrollPosition > 0 ? "text-sm" : "text-xl"
          } transition-all duration-200 ease-in-out`}
        >
          <NavLinkLogo
            href="/"
            className="flex items-center gap-1 no-underline"
          >
            <Image
              src="/icon-large.png"
              alt="logo"
              className="transition-all duration-200 ease-in-out"
              height={scrollPosition > 0 ? 24 : 36}
              width={scrollPosition > 0 ? 24 : 36}
              priority
            />
            <span className="text-sm ml-2">RBY</span>
          </NavLinkLogo>
        </span>

        <ul
          className={`hidden md:flex flex-row transition-all h-full duration-200 m-0 p-0 gap-4 list-none items-center ${
            scrollPosition > 0 ? "text-xs" : "text-sm"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.title} className="mt-0">
              <NavLink href={link.href} onClick={handleNavLinkClick}>
                {link.title}
              </NavLink>
            </li>
          ))}
          <li>
            <HorizontalDivider />
          </li>
          <li className="m-0 flex items-center ">
            <ToggleTheme />
          </li>
          <li className="m-0">
            <ContactDialog
              height={scrollPosition > 0 ? 16 : 20}
              width={scrollPosition > 0 ? 16 : 20}
            />
          </li>
        </ul>

        {/* mobile nav button */}
        <div className="m-0 md:hidden">
          <Button
            aria-label="toggle mobile navigation"
            variant="ghost"
            size="icon"
            onClick={toggleMobileNav}
            className="focus:outline-none"
          >
            {isMobileNavOpen ? <XIcon size={18} /> : <HamburgerMenuIcon />}
          </Button>
        </div>
      </nav>

      {/* mobile nav */}
      <div
        className={`md:hidden absolute w-full z-50 pt-${
          scrollPosition > 0 ? 16 : 0
        }`}
      >
        <div
          className={`transition-all duration-250 ease-in-out bg-background/90 overflow-hidden  ${
            isMobileNavOpen ? "max-h-[100vh]" : "max-h-0"
          }`}
        >
          {/* Mobile Navigation */}
          <nav className="bg-gradient-to-br from-blue-900/10 via-background/10 to-background/10 border-t border-b backdrop-blur-sm transition-all duration-250">
            <div className="md:hidden" id="mobile-menu">
              <ul className="flex flex-col transition-all h-full duration-200 m-0 p-6 space-y-2 list-none items-left ">
                <li
                  key={"home"}
                  className="mt-0 text-secondary-foreground pl-0"
                >
                  <div className="flex w-full justify-between">
                    <NavLink href={"/"} onClick={handleNavLinkClick}>
                      {"Home"}
                    </NavLink>
                    <div className="gap-x-2">
                      <ContactDialog height={16} width={16} />
                      <ToggleTheme />
                    </div>
                  </div>
                </li>
                {navLinks.map((link) => (
                  <li
                    key={link.title}
                    className="mt-0 text-secondary-foreground p-2"
                  >
                    <NavLink href={link.href} onClick={handleNavLinkClick}>
                      {link.title}
                    </NavLink>
                  </li>
                ))}
                <li className="m-0"></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default LayoutNav;
