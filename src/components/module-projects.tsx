import { GithubIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ProjectCarousel from "./project-carousel";
import TextSectionHeader from "./text-section-header";
import TextSectionDescription from "./text-section-description";

const ShowProjects = () => {
  return (
    <article className="z-30 mx-auto space-y-2">
      <div className="pb-2">
        <TextSectionHeader className="text-yellow-50">
          Featured Projects
        </TextSectionHeader>

        <TextSectionDescription className="max-w-4xl">
          In my spare time, I work on a variety of different projects. I like to
          create projects to improve my understanding of a tool or a problem.
        </TextSectionDescription>
      </div>
      <div className="absolute inset-0 -z-10 bg-background blur-3xl" />
      {/* motion-safe:animate-ping-slow
      bg-blue-950/30 */}

      <ProjectCarousel />

      <div className="z-20 flex items-center justify-center gap-2 pt-16 md:mt-0">
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
