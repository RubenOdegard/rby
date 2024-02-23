import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks, siteOptions } from "@/config/config";
import { ClipboardIcon, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import NavLink from "./ui/nav-link";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const listItemVariants = {
  hidden: { opacity: 0, x: -100, y: -3 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: index * 0.08,
    },
  }),
};

export default function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-xl border px-3 py-1.5 transition-colors hover:border-yellow-500 hover:text-yellow-400">
        Menu
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-gray-950/80  bg-gradient-to-bl from-gray-950/80 to-gray-800/20 backdrop-blur-sm">
        <SheetHeader className="">
          <SheetTitle className="border-bottom flex flex-col items-center border-gray-900 pb-6">
            <div className="flex gap-1.5 text-4xl text-white">
              <span className="font-light">Ruben</span>
              <span className="font-semibold text-yellow-400">Odegard</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-extralight text-gray-300">
                Software Developer
              </span>
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-col pt-6 text-black">
            {/* Create a list of links. Animate a list of items with framer motions, staggering each item. */}

            <AnimatePresence>
              <ul className="items-left m-0 flex h-full list-none flex-col p-3 text-left transition-all duration-200">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.title}
                    className="mt-0"
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <SheetClose asChild key={link.title}>
                      <Button
                        asChild
                        type="submit"
                        variant="unstyled"
                        className="m-0 p-0"
                      >
                        <NavLink
                          href={link.href}
                        >
                          {link.title}
                        </NavLink>
                      </Button>
                    </SheetClose>
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="py-4">
          <SheetClose asChild>
            <div className="flex flex-col gap-4 pt-4 text-center">
              <div className="mb-2 flex items-center justify-center gap-2 divide-x divide-gray-800 rounded-full border px-3 py-1 text-gray-200">
                <span className="px-2">
                  contact@rubenodegard.com
                </span>

                <span>
                  <Button variant="unstyled" size="icon" className="pl-2">
                    <ClipboardIcon className="h-4 w-4 transition-colors hover:text-yellow-400" />
                  </Button>
                </span>
              </div>
              <div className="flex justify-center gap-4 underline-offset-4 ">
                <Link
                  href={siteOptions.social.github}
                  target="_blank"
                  className="flex gap-1 text-gray-200 transition-colors hover:text-yellow-400"
                >
                  <Github className="fill-black text-white" />
                  <span>Github</span>
                </Link>
                <Link
                  href={siteOptions.social.linkedin}
                  target="_blank"
                  className="flex gap-1.5 text-gray-200 transition-colors hover:text-yellow-400"
                >
                  <Linkedin className="fill-blue-500 text-blue-500" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
