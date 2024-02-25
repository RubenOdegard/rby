"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GithubLinkButton from "@/components/ui/github-link-button";
import LivePreviewButton from "@/components/ui/live-preview-button";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

import { projects } from "@/config/projects";

const ProjectCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 6500,
      stopOnInteraction: false,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mx-auto w-full min-w-full p-0"
    >
      <div className="flex gap-2 pb-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselContent className="gap-x-8">
        {projects.map(
          (project, index) =>
            project.featured && (
              <CarouselItem key={`carousel-item-${index}`}>
                <div className="flex pb-4">
                  <div className="items-left mb-3 flex w-full flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="m-0 p-0 text-2xl text-yellow-400">
                        {project.title}
                      </h1>
                      <div className="m-0 p-0 text-gray-400">
                        {project.desc}
                      </div>
                    </div>

                    <div className="mt-2 flex space-x-2 md:mt-0">
                      <LivePreviewButton
                        href={project.live}
                        variant="outline"
                      />
                      <GithubLinkButton href={project.link} variant="outline" />
                    </div>
                  </div>
                </div>
                <Card className="aspect-video">
                  <CardContent className="flex items-center justify-center p-0 text-white">
                    <Image
                      src={project.image}
                      alt={project.imagealt}
                      width={1920}
                      height={1080}
                      quality={75}
                      priority={true}
                      className="aspect-video h-full w-full rounded-xl"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ),
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
