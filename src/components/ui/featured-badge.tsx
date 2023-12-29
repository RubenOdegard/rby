import { FlameIcon } from "lucide-react";
import React from "react";

const FeaturedBadge = () => {
  return (
    <div className="absolute rounded-full p-0.5 top-4 -left-0.5">
      <div className="flex gap-0.5 items-center justify-center select-none">
        <FlameIcon size={12} className="text-red-500 fill-red-400" />
      </div>
    </div>
  );
};

export default FeaturedBadge;
