import HtmlIcon from "@/components/ui/svg/html-icon";
import CSSIcon from "@/components/ui/svg/css-icon";
import SASSIcon from "@/components/ui/svg/sass-icon";
import TailwindIcon from "@/components/ui/svg/tailwind-icon";
import JavascriptIcon from "@/components/ui/svg/javascript-icon";
import ReactjsIcon from "@/components/ui/svg/reactjs-icon";
import NextjsIcon from "@/components/ui/svg/nextjs-icon";
import PythonIcon from "@/components/ui/svg/python-icon";
import PlanetscaleIcon from "@/components/ui/svg/planetscale-icon";
import MongoDBIcon from "@/components/ui/svg/mongodb-icon";
import MySQLIcon from "@/components/ui/svg/mysql-icon";
import GitIcon from "@/components/ui/svg/git-icon";
import GithubIcon from "@/components/ui/svg/github-icon";
import DockerIcon from "@/components/ui/svg/docker-icon";
import PostgresIcon from "@/components/ui/svg/postgresql-icon";
import MarkdownIcon from "@/components/ui/svg/markdown-icon";

const boxStyling =
  "flex items-center fill-foreground justify-center hover:border-ring/10 hover:bg-card/10 transition duration-250 border-secondary/80 border aspect-square bg-secondary/50 rounded-md overflow-hidden p-2 hover:scale-105 hover:shadow-sm hover:shadow-ring/10";

const iconSize = "80%";
const showcaseItems = [
  {
    styling: boxStyling,
    icon: <HtmlIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <CSSIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <TailwindIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <SASSIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <JavascriptIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <ReactjsIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <NextjsIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <PythonIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <PlanetscaleIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <MongoDBIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <MySQLIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <PostgresIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <GitIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <GithubIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <DockerIcon height={iconSize} width={iconSize} />,
  },
  {
    styling: boxStyling,
    icon: <MarkdownIcon height={iconSize} width={iconSize} />,
  },
];

export default function ToolsShowcase() {
  return (
    <div className="relative z-40 mb-6 mt-12 md:mt-0 md:mb-0 ">
      <div className="border p-1.5 rounded-lg zoom grid grid-cols-8 md:grid-cols-4    gap-1 w-1/1">
        {showcaseItems.map((item, index) => (
          <div className={`relative z-30 ${item.styling}`} key={index + 1}>
            {item.icon}
          </div>
        ))}
      </div>

      <div className="absolute h-32 w-[400px] bg-accent/80 blur-3xl z-20 top-0 right-1/2 translate-x-1/2" />
    </div>
  );
}
