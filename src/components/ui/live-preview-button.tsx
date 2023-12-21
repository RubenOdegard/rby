import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

type TLivePreviewButton = {
  href?: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

const LivePreviewButton = ({ href, variant }: TLivePreviewButton) => {
  const validHref = href || "/";

  if (href === "none") {
    return (
      <Button
        variant={variant}
        size="sm"
        className="text-xs sm:text-sm"
        aria-label="linedin icon"
        disabled
      >
        <EyeIcon size={14} />
      </Button>
    );
  }

  return (
    <Link href={validHref} target="_blank" title="view live page">
      <Button
        variant={variant}
        size="sm"
        className="text-xs sm:text-sm"
        aria-label="linkedin icon"
      >
        <EyeIcon size={14} />
      </Button>
    </Link>
  );
};

export default LivePreviewButton;
