import ShowBackgroundHero from "@/components/show-background-hero";
import PageTitleAndReturnLink from "@/components/ui/back-to-home-link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 overflow-x-hidden relative ">
      <div className="max-w-4xl w-full py-8">
        <ShowBackgroundHero />
        <PageTitleAndReturnLink
          href="/"
          title="Page does not exist"
          text="<- Back to home"
        />
      </div>
    </main>
  );
}
