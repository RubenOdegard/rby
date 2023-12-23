import { siteOptions } from "@/config/config";
import React from "react";
import AvailableForWork from "./available-for-work";

const ModuleHero = () => {
  return (
    <div className="relative">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase font-extrabold lg:-ml-1 leading-tight">
        {siteOptions.developerName}
      </h1>

      <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl border-none font-extrabold text-secondary-foreground font-sans leading-tight mt-0">
        {siteOptions.developerTitle}
      </h2>
      <p className="text-base lg:text-lg text-secondary-foreground mb-1 sd:mb-0">
        {siteOptions.developerDesc}
      </p>

      <AvailableForWork className="text-xs lg:text-base text-muted-foreground underline underline-offset-4" />
    </div>
  );
};

export default ModuleHero;
