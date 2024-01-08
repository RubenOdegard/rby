import ShowProjectDetails from "@/components/modal-project-details";
import { Badge } from "@/components/ui/badge";
import FeaturedBadge from "@/components/ui/featured-badge";
import GithubLinkButton from "@/components/ui/github-link-button";
import LivePreviewButton from "@/components/ui/live-preview-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects } from "@/config/projects";
import { TProject } from "@/types/types";

const ProjectsTable = () => {
  return (
    <>
      <div className="inset-0 hidden dark:inline-block absolute bg-blue-950/40 blur-3xl -z-10 overflow-x-scroll" />
      <div className="rounded-lg p-2 border-ring/10 border bg-card/50 mt-8 shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[110px]">Read more</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Desc</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="hidden lg:table-cell">Year</TableHead>
              <TableHead className="hidden lg:table-cell">Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project: TProject) => {
              return (
                <TableRow key={project.title}>
                  <TableCell>
                    {/* open modal with project details */}
                    <ShowProjectDetails data={project} />
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm relative font-semibold lg:min-w-[250px]">
                    {/* rendering a badge on the featured projects from the home page */}
                    {project.featured && <FeaturedBadge />}

                    {project.title}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {project.desc}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1.5">
                      <LivePreviewButton
                        href={project.live}
                        variant="outline"
                        data-umami-event="projects-live-view-button"
                      />
                      <GithubLinkButton
                        href={project.link}
                        variant="outline"
                        data-umami-event="projects-github-button"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {project.year}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex gap-1.5">
                      {project.tags.map((badge) => {
                        return (
                          <Badge
                            key={badge + 1}
                            className="dark:invert dark:border cursor-default"
                          >
                            {badge}
                          </Badge>
                        );
                      })}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ProjectsTable;
