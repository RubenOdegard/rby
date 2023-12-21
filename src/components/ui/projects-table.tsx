import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects } from "@/config/config";
import { TProject } from "@/types/types";
import { Badge } from "./badge";
import ShowProjectDetails from "./show-project-details-dialog";
import LivePreviewButton from "./live-preview-button";
import GithubLinkButton from "./github-link-button";

const ProjectsTable = () => {
  return (
    <>
      <div className="inset-0 hidden dark:inline-block absolute bg-blue-950/40 blur-3xl -z-10 overflow-x-scroll" />
      <div className="rounded-lg p-2 border-ring/10 border bg-card/50 mt-8 shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Details</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Desc</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="hidden lg:table-cell">Year</TableHead>
              <TableHead className="hidden lg:table-cell">Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map(
              (
                project: TProject,
              ) => {
                return (
                  <TableRow key={project.title}>
                    <TableCell>
                      {/* Open modal with project details */}
                      <ShowProjectDetails data={project} />
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm">
                      {project.title}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {project.desc}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1.5">
                        <LivePreviewButton
                          href={project.live}
                          variant="outline"
                        />
                        <GithubLinkButton
                          href={project.link}
                          variant="outline"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {project.year}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex gap-1.5">
                        {project.tags.map((badge) => {
                          return <Badge key={badge + 1}>{badge}</Badge>;
                        })}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              },
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ProjectsTable;
