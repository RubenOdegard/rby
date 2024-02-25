"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MouseIcon } from "lucide-react";

const ScrollHideIcon = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <MouseIcon className="text-gray-800 transition-all" />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowDown
          className={`mt-1 h-4 text-gray-800 transition-all ${
            isScrolled && "hidden"
          }`}
        />
      </motion.div>
    </>
  );
};

export default ScrollHideIcon;
