import { certifications, certificationsShowMax } from "@/config/config";
import CertificationCard from "@/components/certification-card";
import { Button } from "./ui/button";
import Link from "next/link";

const ModuleCertifications = () => {
  return (
    <article className="space-y-4 md:space-y-6">
      <h3 className="text-lg md:text-xl lg:text-2xl ">Certifications</h3>
      <p className="text-muted-foreground">
        In the future, there are several courses and certifications that I have
        a particular interest in completing and delving into in my own time.
      </p>

      <ul className="list-none mx-0 mt-4 space-y-4">
        {certifications
          /* filter through and do not include school, as it is education and not certification.*/
          /* school should be changed to education. */
          .filter((cert) => cert.school === 1)
          /* filter through a variable from the site config, only show x amount of certifications. */
          .filter((_, x) => x < certificationsShowMax)
          .map(
            (
              {
                title,
                status,
                school,
                link,
                certification,
                place,
                type,
                startDate,
                endDate,
                desc,
                topics,
                tags,
              },
              index,
            ) => {
              return (
                <li key={`certification-${index}`}>
                  <CertificationCard
                    title={title}
                    status={status}
                    school={school}
                    link={link}
                    cert={certification}
                    place={place}
                    type={type}
                    startDate={startDate}
                    endDate={endDate}
                    desc={desc}
                    topics={topics}
                    tags={tags}
                  />
                </li>
              );
            },
          )}
      </ul>
      <div className="flex items-center justify-center">
        {certifications.length > certificationsShowMax
          ? (
            <Link href="/certifications">
              <Button
                aria-label="show all certifications"
                data-umami-event="main-certifications-go-to-all-certifications"
                key="showAllCertificationsButton"
                className="text-xs sm:text-sm"
              >
                Show all certifications (+
                {certifications.length - certificationsShowMax})
              </Button>
            </Link>
          )
          : null}
      </div>
    </article>
  );
};

export default ModuleCertifications;
