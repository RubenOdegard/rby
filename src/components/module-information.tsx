import React from "react";
import ShowcaseTools from "@/components/showcase-tools";
import Link from "next/link";

const ModuleInformation = () => {
  return (
    <article className="col-span-4 ">
      <h3 className="text-lg md:text-xl lg:text-2xl ">
        Me, myself & I
      </h3>
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="lg:w-2/3 w-full ">
          <p className="text-foreground">
            As a self-taught developer, I'm attempting take a step into a new
            career field that aligns with my longstanding passion for web
            development. As of now, I am balancing my current full time
            employment, studies and and programming, together with other
            hobbies. My personal projects have been a source of{" "}
            <b>self-learning, problem-solving, and curiosity</b>, and my{" "}
            <Link href="/projects">
              open source projects
            </Link>{" "}
            in my portfolio showcases how I structure and work with code. As any
            developer, I spend a whole lot of time creating solutions to my own
            simple problems, just to see if I can solve it.
          </p>
          <p className="italic text-foreground">
            Im currently thinking about creating a very minimalistic note app
            for markdown, as I am writing all notes from my studies in markdown.
          </p>
          <p className="text-muted-foreground">
            I am not afraid to learn new technological tools and am a strong
            advocate for using the right tools for the job at hand. Everything
            becomes a bit easier when you understand that it&apos;s about{" "}
            <i>how</i>{" "}
            you absorb information and process it to create practical solutions
            for problem-solving.
          </p>
          <p className="text-muted-foreground">
            <b>
              Web development is something I am deeply passionate about, and I
              am ready to take on new challenges.
            </b>
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not glued to a screen, you&apos;ll find me in the{" "}
            <i>bouldering walls</i>{" "}
            at climbing centers around Oslo or running through the streets in
            search of better fitness.
          </p>
        </div>
        <div className="flex justify-center items-center relative w-full lg:w-1/3">
          <ShowcaseTools />
        </div>
      </div>
    </article>
  );
};

export default ModuleInformation;
