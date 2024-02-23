import { BackgroundBeamsDemo } from "@/components/background-beams-demo";
import ModuleActivities from "@/components/module-activities";
import ModuleCertifications from "@/components/module-certifications";
import ModuleInformation from "@/components/module-information";
import ModuleProjects from "@/components/module-projects";
import { cn } from "@/lib/utils";

export default function Home() {
  {/* classes used on every section */}
  const sectionClasses =
    "prose dark:prose-invert lg:prose-lg w-full px-4 py-6 md:px-16 md:py-16 lg:px-24";
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      {
        /* Render background in the hero section

      <ModuleBackgroundHero />
      */
      }

      {/* Main page sections */}
      <div className="flex h-full w-full flex-col items-center justify-center space-y-16 pb-16 md:space-y-32 md:pb-32">
        <section
          className={cn(
            sectionClasses,
            "relative flex min-h-[90dvh] items-center justify-center pt-0 text-center md:pt-0",
          )}
        >
          <BackgroundBeamsDemo />
        </section>

        <section className={cn(sectionClasses, "max-w-4xl")}>
          <ModuleInformation />
        </section>

        <section className={cn(sectionClasses, "relative w-full max-w-4xl")}>
          <ModuleProjects />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-4xl",
          )}
        >
          <ModuleActivities />
        </section>

        <section
          className={cn(
            sectionClasses,
            "max-w-4xl ",
          )}
        >
          <ModuleCertifications />
        </section>
      </div>
    </main>
  );
}
