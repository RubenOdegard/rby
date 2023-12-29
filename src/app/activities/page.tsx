import ModuleBackgroundColors from "@/components/module-background-colors";
import PageTitleAndReturnLink from "@/components/link-return-home";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { certifications } from "@/config/certifications";
import { formatMonthYear, getActivityStatus } from "@/lib/utils";
import { TCertification } from "@/types/types";
import { LinkIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "A collection of activities either already complete or to be completed, including but not limited to school education, online education and technical certifications.",
};

const getActivityStatusText = (startDate: string, endDate: string) => {
  const activityStatus = getActivityStatus(startDate, endDate);

  switch (activityStatus) {
    case "completed":
      return "completed";
    case "ongoing":
      return "ongoing";
    case "planned":
      return "planned";
    default:
      return null;
  }
};

const getActivityStatusClass = (startDate: string, endDate: string) => {
  const status = getActivityStatusText(startDate, endDate);

  switch (status) {
    case "completed":
      return "bg-green-500/10";
    case "ongoing":
      return "bg-yellow-500/10";
    case "planned":
      return "bg-red-500/10";
    default:
      return "";
  }
};

export default function Activities() {
  return (
    <main className="flex min-h-screen flex-col px-4 overflow-x-hidden ">
      <ModuleBackgroundColors />
      <div className="flex justify-center space-y-16 md:space-y-24 pb-10">
        <section className="w-full max-w-4xl prose dark:prose-invert lg:prose-lg flex min-h-[70dvh] pt-8 md:pt-16 z-10">
          <div className="flex w-full flex-col">
            <PageTitleAndReturnLink
              href="/"
              title="Activities"
              text="<- Back to home"
              data-umami-event="activities-return-link"
            />
            <h2>
              A list of activities either already complete or to be done in the
              future.
            </h2>

            <p className="text-sm flex flex-col md:flex-row items-center gap-1">
              If you are only interested in certifications:{" "}
              {/* TODO: Not extracted out to component yet, this may be used again later. If so i make it into its own component. */}
              <Link
                href="/certifications"
                className="flex flex-row items-center"
              >
                <Button
                  aria-label="check out the certifications page"
                  data-umami-event="activities-go-to-certifications-button"
                  variant="outline"
                  size="sm"
                  className="font-semibold ml-1.5"
                >
                  check out the certifications page
                  <LinkIcon size={12} className="ml-1.5" />
                </Button>
              </Link>
            </p>
            {/* This div can be rewritten to a component, it has been used in 3 different pages with same classes. */}
            <div className="rounded-lg p-2 border-ring/10 border bg-card/50 mt-6 shadow-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Link</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Author
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  {certifications.map((certification: TCertification) => (
                    <TableRow
                      key={certification.title}
                      className={`text-xs md:text-sm ${
                        getActivityStatusClass(
                          certification.startDate,
                          certification.endDate,
                        )
                      }`}
                    >
                      <TableCell className={"capitalize"}>
                        {getActivityStatusText(
                            certification.startDate,
                            certification.endDate,
                          ) !== null
                          ? getActivityStatusText(
                            certification.startDate,
                            certification.endDate,
                          )
                          : "TBD"}
                      </TableCell>

                      <TableCell className="hidden sm:table-cell">
                        {certification.link
                          ? (
                            <Link
                              href={certification.link}
                              target="_blank"
                              aria-label="certification link"
                            >
                              <LinkIcon size={14} className="text-foreground" />
                            </Link>
                          )
                          : (
                            <LinkIcon
                              size={14}
                              className="text-foreground/50"
                            />
                          )}
                      </TableCell>
                      <TableCell>{certification.title}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {certification.place}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {certification.type}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {getActivityStatusText(
                            certification.startDate,
                            certification.endDate,
                          ) !== null
                          ? `${
                            formatMonthYear(
                              certification.startDate,
                            )
                          } - ${formatMonthYear(certification.endDate)}`
                          : ""}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
