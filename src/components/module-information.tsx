import React from "react";
import ShowcaseTools from "@/components/showcase-tools";

const ModuleInformation = () => {
  return (
    <article className="col-span-4 ">
      <h2 className="text-lg md:text-xl lg:text-2xl">Me, myself and I</h2>

      <p className="text-muted-foreground">
        As a self-taught developer, I take a step into a new career field that
        aligns with my longstanding passion for web development. While lacking
        professional developer experience, my personal projects have been a
        source of{" "}
        <b>self-learning, problem-solving, and curiosity</b>. The selected
        projects in my portfolio demonstrate how I structure and work with code.
      </p>
      <p className="text-muted-foreground">
        I am not afraid to learn new technological tools and am a strong
        advocate for using the right tools for the job at hand. Everything
        becomes a bit easier when you understand that it&apos;s about <i>how</i>
        {" "}
        you absorb information and process it to create practical solutions for
        problem-solving.
      </p>
      <div className="flex justify-center w-full relative">
        <ShowcaseTools />
      </div>
      <p className="text-muted-foreground">
        <b>
          Web development is something I am deeply passionate about, and I am
          ready to take on new challenges.
        </b>
      </p>
      <p className="text-muted-foreground">
        When I&apos;m not glued to a screen, you&apos;ll find me in the{" "}
        <i>bouldering walls</i>{" "}
        at climbing centers around Oslo or running through the streets in search
        of better fitness.
      </p>
    </article>
  );
};

export default ModuleInformation;
