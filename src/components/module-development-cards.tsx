import { MobileIcon } from "@radix-ui/react-icons";
import { CodeIcon, PanelLeft } from "lucide-react";
import Link from "next/link";

const ModuleDevelopmentCards = () => {
  return (
    <div>
      <article className="col-span-4 max-w-4xl mx-auto flex flex-col">
        <h3 className="text-lg md:text-xl lg:text-2xl text-foreground">
          Development
        </h3>
        <div className="flex flex-col md:flex-row gap-x-16 ">
          <div className="w-full text-foreground/90">
            <p className="text-foreground">
              <Link
                href="https://neovim.io/"
                target="_blank"
                className="text-yellow-400"
              >
                Neovim
              </Link>{" "}
              as my main text editor; writing code, documentation and all of my
              study notes in Markdown. I also use VSCode as a fallback if needed
              in a project collaboration. I find using Neovim and working
              strictly in the terminal brings me closer to a server environment
              and combined with{"   "}
              <Link
                href="https://github.com/tmux/tmux/wiki"
                className="text-yellow-400"
                target="_blank"
              >
                tmux
              </Link>{"  "}
              and{" "}
              <Link
                href="https://alacritty.org/"
                className="text-yellow-400"
                target="_blank"
              >
                Alacritty
              </Link>{" "}
              I have a workflow that can easily be used cross-platforms.
            </p>
            <p className="text-foreground">
              <Link href="https://biomejs.dev/" target="_blank">Biome</Link>
              {" "}
              is my formatter of choice as I find it to format more readable
              code compared to{"   "}
              <Link href="https://prettier.io/" target="_blank">Prettier</Link>
              {" "}
              without too much tinkering.{" "}
              Biome also has a 35x improvement in speed compared to Prettier,
              which is a factor for me when choosing a formatter for personal
              projects.
            </p>
            <p className="text-foreground">
              For local development I like using Docker containers for a quick
              setup of local databases, otherwise I take full advantage of the
              serverless hosting on Vercel when using Nextjs and Planetscale for
              MySQL databases in live deployments.
            </p>
          </div>
        </div>
      </article>
      <div className="flex flex-col items-start justify-start lg:flex-row  mt-16 border gap-6 p-8 rounded-md divide-x">
        <div className="flex">
          <div className="flex w-auto items-start">
            <PanelLeft className="mr-2 text-yellow-400 h-auto w-6" />
          </div>
          <div className="flex flex-col max-w-[600px]">
            <h4 className="font-semibold lg:text-lg text-foreground">
              Front-end
            </h4>
            <p className="m-0 p-0 mt-2 text-muted-foreground text-pretty">
              React.js or more specifically Next.js for development. TypeScript
              for static typing and Tailwind CSS for rapid styling.
            </p>
            <p className="m-0 p-0 mt-2 text-muted-foreground/50 text-pretty italic">
              Both Astro and Remix is looking promising, I can see myself trying
              them out in the future.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-auto items-start">
            <CodeIcon className="mr-2 ml-6 text-yellow-400 h-auto w-6" />
          </div>
          <div className="flex flex-col max-w-[600px]">
            <h4 className="font-semibold lg:text-lg text-foreground">
              Back-end
            </h4>
            <p className="m-0 p-0 mt-2 text-muted-foreground text-pretty">
              TypeScript with Node.js and Express for server-side development,
              sometimes Python for specific needs.
            </p>

            <p className="m-0 p-0 mt-2 text-muted-foreground/50 text-pretty italic">
              I&apos;d like to look more into GoLang for creating back-ends and
              microservices.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-auto items-start">
            <MobileIcon className="mr-2 ml-6 text-yellow-400 h-auto w-6" />
          </div>
          <div className="flex flex-col max-w-[600px]">
            <h4 className="font-semibold lg:text-lg text-foreground">Mobile</h4>
            <p className="m-0 p-0 mt-2 text-muted-foreground text-pretty">
              NextPWA for Progressive Web Apps, which is a easy and fast way to
              get an application to both web and mobile.
            </p>
            <p className="m-0 p-0 mt-2 text-muted-foreground/50 text-pretty italic">
              I am delving into React Native to get around PWA restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDevelopmentCards;
