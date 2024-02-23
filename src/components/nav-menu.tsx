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
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";

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

// Stop the sheet from closing when a non-navigating link is clicked
function handleStopPropagation(event: React.SyntheticEvent) {
  event.stopPropagation();
}

export default function NavMenu() {
  const { toast } = useToast();
  const copyToClipboard = async (event: React.SyntheticEvent) => {
    try {
      handleStopPropagation(event);
      const input = document.getElementById("link") as HTMLInputElement;

      if (input) {
        await navigator.clipboard.writeText(input.value);
        toast({
          title: "Contact Information",
          description: `${input.value} has been copied to your clipboard.`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
      });
    }
  };
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
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: Prevent sheet from closing when clicking a non-navigating option */}
              <div
                className="mx-auto mb-2 flex items-center justify-center gap-2 divide-x divide-gray-800 rounded-full border px-3 py-1 text-gray-200"
                onClick={copyToClipboard}
              >
                <Input
                  id="link"
                  defaultValue="contact@rubenodegard.com"
                  className="m-0 flex  min-w-[200px] border-none p-0 text-center text-gray-500 outline-none"
                  readOnly
                  disabled={true}
                />

                <span>
                  <Button
                    variant="unstyled"
                    size="icon"
                    className="pl-2"
                    onClick={copyToClipboard}
                  >
                    <ClipboardIcon className="h-4 w-4 text-yellow-400 transition-colors hover:text-yellow-600" />
                  </Button>
                </span>
              </div>
              <div className="flex justify-center gap-4 underline-offset-4 ">
                <Link
                  href={siteOptions.social.github}
                  target="_blank"
                  className="flex gap-1 text-yellow-400 decoration-1 transition-colors hover:text-yellow-600"
                  onClick={handleStopPropagation}
                >
                  <span>Github</span>
                </Link>
                <Link
                  href={siteOptions.social.linkedin}
                  target="_blank"
                  className="flex gap-1.5 text-yellow-400 decoration-1 transition-colors hover:text-yellow-600 "
                  onClick={handleStopPropagation}
                >
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
