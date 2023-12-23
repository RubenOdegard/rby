import { FlameIcon } from "lucide-react";
import React from "react";

const FeaturedBadge = () => {
  return (
    <div className="absolute bg-card/50 border border-ring/10 rounded-full p-0.5 top-3.5 -left-1">
      <div className="flex gap-0.5 items-center justify-center select-none">
        <FlameIcon size={12} className="text-red-500 fill-red-400" />
      </div>
    </div>
  );
};

export default FeaturedBadge;
