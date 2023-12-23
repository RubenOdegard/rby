"use client";
import NavLink from "./ui/nav-link";

type TPageTitleAndReturnLink = {
  title: string;
  text: string;
  href: string;
};

const LinkReturnHome = ({ title, text, href }: TPageTitleAndReturnLink) => {
  return (
    <>
      <h1>{title}</h1>
      <NavLink href={href}>{text}</NavLink>
    </>
  );
};

export default LinkReturnHome;
