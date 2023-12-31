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
      delay: 5000,
      stopOnInteraction: false,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-4xl mx-auto p-0 md:p-2"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          project.featured && (
            <CarouselItem key={`carousel-item-${index}`}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-4 text-white">
                  <div className="w-full bg-cover bg-center relative">
                    <Image
                      src={project.image}
                      alt={project.imagealt}
                      width={1920}
                      height={1080}
                      quality={50}
                      priority={true}
                      className="w-full h-full object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black opacity-100">
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-5/6 md:w-full sm:max-w-xl px-1 py-1.5 md:px-8 md:py-8 rounded-md bg-gradient-to-t from-gray-950/50 to-gray-900/30 border border-accent/10 dark:border-ring/10 shadow-md backdrop-blur-sm transition-all duration-500">
                      <h3 className="text-sm md:text-lg font-bold m-0 text-white">
                        {project.title}
                      </h3>
                      <p className="hidden sm:inline-block text-xs md:text-sm mt-0 opacity-90">
                        {project.desc}
                      </p>
                      <div className="flex w-full gap-1.5 items-center justify-center mt-2 md:mt-4">
                        <LivePreviewButton
                          href={project.live}
                          variant="outline"
                        />
                        <GithubLinkButton
                          href={project.link}
                          variant="outline"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          )
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
