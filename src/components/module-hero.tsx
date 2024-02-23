import { siteOptions } from "@/config/config";
import { MapPin } from "lucide-react";

const ModuleHero = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative">
        <div className="text-left">
          <h1 className="text-4xl font-extralight leading-tight text-white md:text-6xl lg:text-9xl">
            Web Development
          </h1>

          <h1 className="text-4xl font-extralight leading-tight text-white md:text-6xl lg:text-9xl">
            <span className="text-yellow-400">UX/UI</span> Design
          </h1>
        </div>
        <div className="absolute -bottom-32 right-0 z-50 flex flex-col items-end justify-end gap-1 rounded-xl rounded-br-none border border-gray-900/80 bg-gray-950/5 p-4 drop-shadow-lg backdrop-blur-sm">
          <h2 className="m-0 border-none p-0 text-xs font-extralight leading-tight text-white md:text-base">
            Self-taught <span className="text-yellow-400">developer</span>{" "}
            with an interest for{" "}
            <span className="text-yellow-400">design.</span>
          </h2>
          <div className="flex items-center justify-center gap-1 text-sm font-extralight text-gray-500">
            <MapPin className=" w-3" />
            {siteOptions.developerDesc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleHero;
