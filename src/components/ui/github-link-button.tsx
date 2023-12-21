import { EyeIcon, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

type TGithubLinkButton = {
  href?: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

const GithubLinkButton = ({ href, variant }: TGithubLinkButton) => {
  const validHref = href || "/";

  if (href === "none") {
    return (
      <Button
        variant={variant}
        size="sm"
        className="text-xs sm:text-sm"
        aria-label="github icon"
        disabled
      >
        <Github size={14} />
      </Button>
    );
  }

  return (
    <Link href={validHref} target="_blank" title="view github page">
      <Button
        variant={variant}
        size="sm"
        className="text-xs sm:text-sm"
        aria-label="github icon"
      >
        <Github size={14} />
      </Button>
    </Link>
  );
};

export default GithubLinkButton;
