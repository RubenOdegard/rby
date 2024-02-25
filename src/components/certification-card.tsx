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

export default function CertificationCard(certification: TCertification) {
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

  return (
    <>
      <Card className="group bg-card p-4 shadow-md md:p-6">
        <div className="relative flex gap-x-4">
          <div className="flex w-full flex-col">
            <div className="relative flex justify-between gap-x-4">
              <div className="py-0.5 text-xs leading-5 md:text-base">
                <span className="mt-0.5 flex items-center gap-2 font-semibold tracking-tight sm:mt-0  ">
                  <Shield size={16} className="text-yellow-400 " />
                  {certification.title}
                </span>
              </div>
              <CertProgress
                getStatusText={getStatusText}
                getStatusColor={getStatusColor}
                status={certification.status}
              />
            </div>

            <span className="flex items-center gap-1 text-xs text-foreground/90 md:text-sm">
              <MapPin size={14} className="ml-[1px] mr-[5px] text-yellow-400" />
              {certification.place}: {certification.type}
            </span>

            <Accordion type="single" className="pt-3" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-0 text-yellow-400">
                  Read more
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="m-0 p-0 ">
                    {certification.topics.map((i) => {
                      return (
                        <li
                          key={i}
                          className=" mt-2 list-none rounded-md border bg-card  px-2 py-1.5 text-xs leading-4 text-muted-foreground shadow-inner transition-all duration-150 "
                        >
                          {i}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mx-2 flex flex-wrap gap-2">
                    {certification.tags.map((i) => {
                      return (
                        <Badge
                          key={i}
                          className="bg-yellow-400 text-yellow-950 hover:bg-yellow-300"
                        >
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
                      className=" mb-0 w-1/2 text-yellow-400"
                    >
                      <Link
                        href={certification.link}
                        target="_blank"
                        className="group no-underline"
                      >
                        Link to course
                        <MoveUpRightIcon className="ml-1 h-3 w-3 transition-all group-hover:ml-2 group-hover:rotate-45" />
                      </Link>
                    </Button>
                    {certification.status === 0 ? (
                      <Button
                        aria-label="certification"
                        data-umami-event={`open certification-${certification.title}`}
                        asChild
                        size="sm"
                        variant="outline"
                        className="mb-0 w-1/2 text-yellow-400"
                      >
                        <Link
                          href={!certification.cert ? "/" : certification.cert}
                          target="_blank"
                          className="group no-underline"
                        >
                          Certification
                          <MoveUpRightIcon className="ml-1 h-3 w-3 transition-all group-hover:ml-2 group-hover:rotate-45" />
                        </Link>
                      </Button>
                    ) : null}
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

export function CertProgress({
  status,
  getStatusColor,
  getStatusText,
}: TCertProgress) {
  return (
    <div>
      <span className="pointer-events-none absolute -top-7 right-1/2 flex translate-x-1/2 items-center gap-1.5 rounded-md border border-border bg-primary-foreground  px-2 py-0.5  font-sans text-xs text-foreground transition-all duration-150 sm:relative sm:-top-7 md:-top-9">
        <span
          className={`relative z-20 flex h-3 w-3 rounded-full ${getStatusColor(
            status,
          )}`}
        >
          <span
            className={`absolute inset-0 z-10 h-2 w-2 overflow-clip rounded-full blur-md ${getStatusColor(
              status,
            )}`}
          />
        </span>
        {getStatusText(status)}
      </span>
    </div>
  );
}
