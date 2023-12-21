import ShowActivities from "@/components/show-activities";
import ShowBackgroundHero from "@/components/show-background-hero";
import ShowCertifications from "@/components/show-certifications";
import ShowInformation from "@/components/show-information";
import ShowPageHero from "@/components/show-page-hero";
import ShowProjects from "@/components/show-projects";
import { cn } from "@/lib/utils";

// TODO: Projectgallery on main page needs to get info from config file. Add featured flag to projects
// TODO: Add clickable links to Certifications
// TODO: Add clickable links to Activities
// TODO: Add "featured" badge on project page (need to change types and json data as well)

export default function Home() {
  const sectionClasses = "w-full prose dark:prose-invert lg:prose-lg";
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-12 lg:px-0 overflow-x-hidden relative ">
      {/* Render background in the hero section */}
      <ShowBackgroundHero />
      {/* Main page sections */}
      <div className="flex w-full h-full justify-center items-center flex-col space-y-16 md:space-y-32 pb-32">
        <section
          className={cn(
            sectionClasses,
            "max-w-4xl items-center pt-24 flex min-h-[60dvh] ",
          )}
        >
          <ShowPageHero />
        </section>

        <section className={cn(sectionClasses, "relative")}>
          <ShowProjects />
        </section>

        <section className={cn(sectionClasses, "max-w-2xl")}>
          <ShowInformation />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-2xl ",
          )}
        >
          <ShowActivities />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-2xl ",
          )}
        >
          <ShowCertifications />
        </section>
      </div>
    </main>
  );
}
