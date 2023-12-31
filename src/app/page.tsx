import ModuleActivities from "@/components/module-activities";
import ModuleBackgroundHero from "@/components/module-background-hero";
import ModuleCertifications from "@/components/module-certifications";
import ModuleHero from "@/components/module-hero";
import ModuleInformation from "@/components/module-information";
import ModuleProjects from "@/components/module-projects";
import { cn } from "@/lib/utils";

// TODO: Fix every link in the config file for activities and certifications

export default function Home() {
  {/* classes used on every section */}
  const sectionClasses = "w-full prose dark:prose-invert lg:prose-lg py-16";
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-12 lg:px-0 overflow-x-hidden relative ">
      {/* Render background in the hero section */}
      <ModuleBackgroundHero />
      {/* Main page sections */}
      <div className="flex w-full h-full justify-center items-center flex-col space-y-16 md:space-y-32 pb-32">
        <section
          className={cn(
            sectionClasses,
            "max-w-4xl items-center pt-24 flex min-h-[60dvh] ",
          )}
        >
          <ModuleHero />
        </section>

        <section className={cn(sectionClasses, "relative max-w-4xl")}>
          <ModuleProjects />
        </section>

        <section className={cn(sectionClasses, "max-w-4xl")}>
          <ModuleInformation />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-2xl ",
          )}
        >
          <ModuleActivities />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-2xl ",
          )}
        >
          <ModuleCertifications />
        </section>
      </div>
    </main>
  );
}
