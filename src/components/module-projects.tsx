import { GithubIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ProjectCarousel from "./project-carousel";

const ShowProjects = () => {
  return (
    <article className="space-y-4 md:space-y-6 max-w-4xl mx-auto z-30 ">
      <h3 className="text-lg md:text-xl lg:text-2xl">Featured Projects</h3>
      <div className="flex max-w-4xl relative p-2 rounded-xl transition duration-250 border-ring/10 border bg-card/50">
        <div className="inset-0 absolute bg-blue-950/50 blur-3xl -z-10 animate-pulse" />
        <ProjectCarousel />
      </div>
      <div className="flex items-center justify-center z-20 gap-2">
        <Link href="/projects">
          <Button
            aria-label="show all projects"
            data-umami-event="hero-show-all-projects"
            variant="outline"
            className="text-xs sm:text-sm"
          >
            Show all projects
          </Button>
        </Link>
        <Link href="https://github.com/rubenodegard" target="_blank">
          <Button
            aria-label="go to github profile rubenodegard"
            data-umami-event="hero-go-to-github-profile"
            variant="default"
            className="text-xs sm:text-sm "
          >
            <GithubIcon size={14} className="mr-2" />
            Github Profile
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default ShowProjects;
