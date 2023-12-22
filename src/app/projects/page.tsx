import RenderBackgroundColors from "@/components/render-background-colors";
import PageTitleAndReturnLink from "@/components/ui/back-to-home-link";
import ProjectsTable from "@/components/ui/projects-table";
import { PictureInPicture } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of web developer projects by Ruben Odegard.",
};

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col px-4 overflow-x-hidden ">
      {/* Renders the background elements that sets the colors on every page.*/}
      <RenderBackgroundColors />
      {/* Container */}
      <div className="flex justify-center space-y-16 md:space-y-24">
        {/* Content section */}
        <section className="w-full flex justify-center prose dark:prose-invert lg:prose-lg min-h-[70dvh] pt-6 z-10">
          <div className="w-full 3xl:px-24 mx-auto">
            <div className="flex max-w-4xl justify-center mx-auto">
              <div className="flex w-full flex-col">
                <PageTitleAndReturnLink
                  href="/"
                  title="Projects"
                  text="<- Back to home"
                />
                <h2>
                  Personal collection of projects that I want to showcase.
                </h2>

                <p className="text-sm   mb-0 pb-0">
                  Not all projects are worth showcasing, check out my{" "}
                  <Link
                    href="https://github.com/rubenodegard"
                    className="m-0 p-0 mr-[0.2rem]"
                    target="_blank"
                  >
                    Github
                  </Link>
                  for snippets and snacks.
                </p>

                {/* conditionally render "show more" or a icon based on viewport. */}
                <p className="text-sm pt-0 mt-4 md:mt-2">
                  Click
                  <span className="hidden md:inline font-semibold">
                    {" "}
                    Open{" "}
                  </span>
                  <span className="md:hidden inline-block px-2">
                    <PictureInPicture size={16} />
                  </span>
                  or{"  "}
                  to open a modal and display more in dept information about a
                  project.
                </p>
              </div>
            </div>
            {/* Rendering table of projects */}
            <div className="max-w-7xl relative mx-auto">
              <ProjectsTable />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
