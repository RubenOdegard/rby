import React from "react";
import Image from "next/image";

const ShowBackgroundHero = () => {
  return (
    <>
      {/* Rendering gradient background - top right side */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] lg:h-[1000px] lg:w-[1000px] blur-3xl bg-gradient-to-bl from-blue-900/30 via-blue-900/10 to-background" />
      {/* Rendering gradient background - top left side */}
      <div className="hidden lg:absolute top-0 left-0 h-[500px] w-[500px] blur-3xl bg-gradient-to-br from-emerald-900/10 via-emerald-900/10 to-background" />

      {
        /* Rendering wavey lines in hero section
      <Image
        src="/images/line.svg"
        height={1920}
        width={1080}
        alt="image of a lot of wavey lines"
        quality={30}
        className="absolute top-0 left-0 -z-10 opacity-20 w-full md:scale-100 h-[30dvh] md:h-[100dvh]"
      />*/
      }
    </>
  );
};

export default ShowBackgroundHero;
