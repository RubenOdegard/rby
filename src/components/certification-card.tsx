import { MapPin, MoveUpRightIcon, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TCertification } from "@/types/types";
import Card from "@/components/ui/container-card";

export default function CertificationCard(
  certification: TCertification,
) {
  // get status from certification and convert to text
  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Completed";
      case 1:
        return "Ongoing";
      case 2:
        return "TBD";
      default:
        return "";
    }
  };

  // get status from certification and convert to colors
  const getStatusColor = (status: number) => {
    switch (status) {
      case 0:
        return "bg-green-300";
      case 1:
        return "bg-yellow-300";
      case 2:
        return "bg-red-300";
      default:
        return "bg-gray-300"; // Default color for other cases
    }
  };

  // Fix config.json to include the right texta and format
  // Add a tooltip on TBD.

  return (
    <>
      <Card className="shadow-md bg-card group p-4 md:p-6">
        <div className="relative flex gap-x-4">
          <div className="flex flex-col w-full">
            <div className="flex justify-between gap-x-4 relative">
              <div className="py-0.5 text-xs md:text-base leading-5">
                <span className="font-semibold flex gap-2 mt-0.5 sm:mt-0 items-center tracking-tight text-foreground ">
                  <Shield size={16} className="text-foreground " />
                  {certification.title}
                </span>
              </div>
              <CertProgress
                getStatusText={getStatusText}
                getStatusColor={getStatusColor}
                status={certification.status}
              />
            </div>

            <span className="text-xs flex items-center gap-1 md:text-sm text-foreground">
              <MapPin size={14} className="mr-[5px] ml-[1px] text-foreground" />
              {certification.place}: {certification.type}
            </span>

            <Accordion type="single" className="pt-3" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" p-0">
                  Read more
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="m-0 p-0 ">
                    {certification.topics.map((i, index) => {
                      return (
                        <li
                          key={index + 1}
                          className=" text-xs leading-4 text-muted-foreground bg-card mt-2  transition-all duration-150 border py-1.5 px-2 shadow-inner rounded-md list-none "
                        >
                          {i}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex gap-2 flex-wrap mx-2">
                    {certification.tags.map((i, index) => {
                      return (
                        <Badge key={index + 1} className="bg-primary">
                          {i}
                        </Badge>
                      );
                    })}
                  </div>
                  <span className="flex justify-center  gap-2">
                    <Button
                      aria-label="go to certifications page"
                      asChild
                      size="sm"
                      variant="outline"
                      className=" mb-0 w-1/2 "
                    >
                      <Link
                        href={certification.link}
                        target="_blank"
                        className="no-underline group"
                      >
                        Link to course
                        <MoveUpRightIcon className="h-3 w-3 ml-1 group-hover:ml-2 group-hover:rotate-45 transition-all" />
                      </Link>
                    </Button>
                    {certification.status === 0
                      ? (
                        <Button
                          aria-label="certification"
                          data-umami-event="open certification" // TODO: edit this to show which certification is clicked.
                          asChild
                          size="sm"
                          variant="outline"
                          className="mb-0 w-1/2"
                        >
                          <Link
                            href={certification.cert!}
                            target="_blank"
                            className="no-underline group"
                          >
                            Certification
                            <MoveUpRightIcon className="h-3 w-3 ml-1 group-hover:ml-2 group-hover:rotate-45 transition-all" />
                          </Link>
                        </Button>
                      )
                      : null}
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Card>
    </>
  );
}

export type TCertProgress = {
  status: number; // Assuming the status is a number based on the implementation of getStatusText and getStatusColor
  getStatusColor: (status: number) => string;
  getStatusText: (status: number) => string;
};

export function CertProgress(
  { status, getStatusColor, getStatusText }: TCertProgress,
) {
  return (
    <div>
      <span className="absolute -top-7 right-1/2 sm:-top-7 md:-top-9 translate-x-1/2 bg-primary-foreground text-foreground border-border border sm:relative pointer-events-none  transition-all duration-150  font-mono rounded-md text-xs flex gap-1.5 items-center px-2 py-0.5">
        <span
          className={`flex h-3 w-3 relative rounded-full z-20 ${
            getStatusColor(status)
          }`}
        >
          <span
            className={`absolute overflow-clip inset-0 z-10 h-2 w-2 blur-md rounded-full ${
              getStatusColor(status)
            }`}
          />
        </span>
        {getStatusText(status)}
      </span>
    </div>
  );
}
