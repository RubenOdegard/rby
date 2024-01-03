import ModuleBackgroundColors from "@/components/module-background-colors";
import PageTitleAndReturnLink from "@/components/link-return-home";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
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
  title: "Certifications",
  description:
    "A collection of technical and developer relevant certifications either already complete or to be completed",
};

const getCertificationStatusText = (startDate: string, endDate: string) => {
  const certificationStatus = getActivityStatus(startDate, endDate);

  switch (certificationStatus) {
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

const getCertificationStatusClass = (startDate: string, endDate: string) => {
  const status = getCertificationStatusText(startDate, endDate);

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

export default function Certifications() {
  return (
    <main className="flex min-h-screen flex-col px-4 overflow-x-hidden ">
      <ModuleBackgroundColors />
      <div className="flex justify-center space-y-16 md:space-y-24 pb-10">
        <section className="w-full max-w-4xl prose dark:prose-invert lg:prose-lg flex min-h-[70dvh]  pt-8 md:pt-16 z-10">
          <div className="flex w-full flex-col">
            <PageTitleAndReturnLink
              href="/"
              title="Certifications"
              text="<- Back to home"
            />
            <h2>
              A list of certifications either already complete or to be done in
              the future.
            </h2>

            <p className="text-sm flex flex-col md:flex-row items-center gap-1">
              If you are interested in all of my activities:{" "}
              {/* Not extracted out to component yet, this may be used again later. If so i make it into its own component. */}
              <Link href="/activities" className="flex flex-row items-center">
                <Button
                  aria-label="check out the activities page"
                  data-umami-event="certifications-go-to-activities-button"
                  variant="outline"
                  size="sm"
                  className="font-semibold ml-1.5"
                >
                  check out the activities page
                  <LinkIcon size={12} className="ml-1.5" />
                </Button>
              </Link>
            </p>
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
                <TableBody>
                  {certifications
                    .filter((certification) => certification.school !== 0)
                    .map((certification: TCertification) => (
                      <TableRow
                        key={certification.title}
                        className={`text-xs md:text-sm ${
                          getCertificationStatusClass(
                            certification.startDate,
                            certification.endDate,
                          )
                        }`}
                      >
                        <TableCell className={"capitalize"}>
                          {getCertificationStatusText(
                              certification.startDate,
                              certification.endDate,
                            ) !== null
                            ? getCertificationStatusText(
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
                                <LinkIcon
                                  size={14}
                                  className="text-foreground"
                                />
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
                        <TableCell className="hidden md:table-cell min-w-[180px]">
                          {getCertificationStatusText(
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
