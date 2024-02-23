import ModuleBackgroundColors from "@/components/module-background-colors";
import PageTitleAndReturnLink from "@/components/link-return-home";
import ProjectsTable from "@/components//projects-table";
import { PictureInPicture } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of web developer projects by Ruben Odegard.",
};

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden px-4 ">
      {/* Renders the background elements that sets the colors on every page.*/}
      <ModuleBackgroundColors />
      {/* Container */}
      <div className="flex justify-center space-y-16 md:space-y-24">
        {/* Content section */}
        <section className="prose dark:prose-invert lg:prose-lg z-10 flex min-h-[70dvh] w-full justify-center pt-8 md:pt-16">
          <div className="3xl:px-24 mx-auto w-full">
            <div className="mx-auto flex max-w-4xl justify-center">
              <div className="flex w-full flex-col">
                <PageTitleAndReturnLink
                  href="/"
                  title="Projects"
                  data-umami-event="projects-return-link"
                  text="<- Back to home"
                />
                <h2>
                  Collection of my personal open source projects.
                </h2>

                {/* conditionally render "show more" or a icon based on viewport. */}
                <p className="mt-4 pt-0 text-sm md:mt-2">
                  Click{" "}
                  <span className="hidden font-semibold md:inline">Open</span>
                  <span className="inline-block px-2 md:hidden">
                    <PictureInPicture size={16} />
                  </span>{" "}
                  to display more in dept information about a project.
                </p>
              </div>
            </div>
            {/* Rendering table of projects */}
            <div className="relative mx-auto max-w-7xl">
              <ProjectsTable />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
