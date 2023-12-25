import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TProject } from "@/types/types";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import GithubLinkButton from "./ui/github-link-button";
import LivePreviewButton from "./ui/live-preview-button";
import { PictureInPicture } from "lucide-react";

interface ModalProjectDetailsProps {
  data: TProject;
}

export default function ModalProjectDetails({
  data,
}: ModalProjectDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label="open more details about the project"
          data-umami-event="projects-open-details"
          variant="outline"
          size="sm"
          className="text-xs md:text-sm"
        >
          <span className="hidden md:inline">Open</span>
          <span className="md:hidden">
            <PictureInPicture size={16} />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full flex flex-col gap-y-12 p-8 md:py-12 md:px-12 max-w-7xl max-h-[80vh] overflow-scroll ">
        <DialogHeader>
          <div className="grid grid-cols-6 gap-8  rounded-md">
            <div className="col-span-6 lg:col-span-3">
              <DialogTitle className="mt-0 pt-0 text-xl flex justify-between items-center">
                {data.title}
              </DialogTitle>
              <DialogDescription className="text-left">
                <p className="text-secondary-foreground">
                  {data.showcase.introduction}
                </p>
                <p className="mt-3">
                  {data.showcase.desc.map((desc, index) => {
                    return <span key={`desc-${index}`}>{desc}</span>;
                  })}
                </p>
                <div className="flex gap-1.5 mt-4">
                  <LivePreviewButton
                    href={data.live}
                    variant="default"
                    data-umami-event="projects-details-live-view-button"
                  />
                  <GithubLinkButton
                    href={data.link}
                    variant="default"
                    data-umami-event="projects-details-github-button"
                  />
                </div>
              </DialogDescription>
            </div>
            <div className="col-span-6 lg:col-span-3 order-first lg:order-last w-full relative">
              <Image
                src={data.image}
                alt={data.imagealt}
                height={1920}
                width={1080}
                layout=""
                objectFit="fill"
                className="border-ring/10 border rounded-lg shadow-md"
              />
              <div className="inset-0 hidden dark:inline-block absolute bg-blue-900/20 blur-3xl -z-10" />
            </div>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-6 gap-x-8 gap-y-4 -mt-8 lg:mt-0">
          <div className="flex flex-col space-x-2 col-span-6 lg:col-span-4 mt-8 lg:mt-0">
            <h3>{data.showcase.mainSection.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {data.showcase.mainSection.text.map((content, index) => {
                return <span key={`mainSection-${index}`}>{content}</span>;
              })}
            </p>
          </div>
          <div className="flex flex-col space-x-2 col-span-6 lg:col-span-2 order-first lg:order-last">
            <h3>Tags</h3>
            <p className="text-muted-foreground gap-4 flex flex-wrap lg:mt-6 mt-4">
              {data.showcase.tags.map((tag) => {
                return <Badge key={`badge-${tag}`}>{tag}</Badge>;
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-col col-span-6 ">
          <h3>{data.showcase.longSection.title}</h3>
          <p className="text-muted-foreground text-sm md:text-base ml-[8px]">
            {data.showcase.longSection.text
              ? data.showcase.longSection.text.map((text, index) => (
                <span key={`longSection-${index}`}>{text}</span>
              ))
              : null}
          </p>
        </div>

        {data.showcase.contentSection
          ? data.showcase.contentSection.map((content, index) => (
            <div
              key={`contentSection-${index}`}
              className={"grid grid-cols-6 place-items-center gap-x-8 px-0 md:px-8 "}
            >
              {index % 2 === 0
                ? (
                  <>
                    {/* Image on the left */}
                    <div className="flex flex-col space-x-2 col-span-6 lg:col-span-3 text-left">
                      <div className="text-muted-foreground gap-4 flex relative w-full mt-6 ">
                        {/* background blur for image, can be made into component because it's used multiple times over the project */}
                        <div className="inset-0 hidden dark:inline-block absolute bg-blue-950/20 blur-3xl -z-10" />
                        <Image
                          src={content.image}
                          alt={content.imagealt}
                          width={1920}
                          height={1080}
                          layout="responsive"
                          objectFit="cover"
                          className="border-ring/10 border rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                    {/* Text on the right */}
                    <div className="flex flex-col w-full space-x-2 order-first lg:order-last col-span-6 lg:col-span-3 ">
                      <h3>{content.title}</h3>
                      <p className="text-muted-foreground  text-sm md:text-base ">
                        {content.text.map((text, textIndex) => (
                          <span
                            key={`contentSection-${index}-text-${textIndex}`}
                          >
                            {text}
                          </span>
                        ))}
                      </p>
                    </div>
                  </>
                )
                : (
                  // reverse order for odd value
                  <>
                    {/* Text on the left */}
                    <div className="flex flex-col w-full space-x-2 order-first col-span-6 lg:col-span-3">
                      <h3>{content.title}</h3>
                      <p className="text-muted-foreground  text-sm md:text-base">
                        {content.text.map((text, textIndex) => (
                          <span
                            key={`contentSection-${index}-text-${textIndex}`}
                          >
                            {text}
                          </span>
                        ))}
                      </p>
                    </div>
                    {/* Image on the right */}
                    <div className="flex flex-col space-x-2 col-span-6 lg:col-span-3 ">
                      <div className="text-muted-foreground gap-4 flex relative w-full mt-6">
                        {/* background blur for image, can be made into component because it's used multiple times over the project */}
                        <div className="inset-0 hidden dark:inline-block absolute bg-blue-950/20 blur-3xl -z-10" />

                        <Image
                          src={content.image}
                          alt={content.imagealt}
                          width={1920}
                          height={1080}
                          layout="responsive"
                          objectFit="cover"
                          className="border-ring/10 border rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </>
                )}
            </div>
          ))
          : null}

        <DialogFooter className="sm:justify-start col-span-6">
          <DialogClose asChild>
            <Button
              aria-label="close dialog"
              type="button"
              variant="default"
              data-umami-event="projects-details-dialog-close-button"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
