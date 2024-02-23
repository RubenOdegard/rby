import ShowcaseTools from "@/components/showcase-tools";
import Link from "next/link";
import React from "react";
import TextSectionHeader from "./text-section-header";

export const ModuleInformation = () => {
  return (
    <article className="col-span-4 ">
      <TextSectionHeader>Me, Myself & I</TextSectionHeader>
      <div className="flex flex-col gap-x-16 md:flex-row">
        <div className="w-full lg:w-2/3 ">
          <p className="text-foreground">
            As a self-taught developer, I&apos;m attempting take a step into a
            new career field that aligns with my longstanding passion for web
            development. As of now, I am balancing my current full time
            employment, studies and and programming, together with other
            hobbies. My personal projects have been a source of{" "}
            <b>self-learning, problem-solving, and curiosity</b>, and the{" "}
            <Link href="/projects">
              open source projects
            </Link>{" "}
            in my portfolio showcases how I structure and work with code.
          </p>
          <p className="text-muted-foreground">
            I like learning new technological tools and am a strong advocate for
            using the right tools for the job at hand. Everything becomes a bit
            easier when you understand that it&apos;s about <i>how</i>{" "}
            you absorb information and process it to create practical solutions
            for problem-solving.
          </p>
          <p className="text-yellow-400">
            Web development is something I am deeply passionate about, and I am
            always up for new challenges.
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not glued to a screen, you&apos;ll find me in the{" "}
            <i>bouldering walls</i>{" "}
            at climbing centers around Oslo or running through the streets in
            search of better fitness.
          </p>
        </div>
        <div className="relative flex w-full items-center justify-center lg:w-1/3">
          <ShowcaseTools />
        </div>
      </div>
    </article>
  );
};
