import { activity } from "@/config/activites";
import ActivityCard from "@/components/activity-card";
import { Button } from "./ui/button";
import Link from "next/link";
import TextSectionHeader from "./text-section-header";
import TextSectionDescription from "./text-section-description";

const ModuleActivities = () => {
  return (
    <article className="space-y-4 md:space-y-6">
      <div>
        <TextSectionHeader>Activites</TextSectionHeader>
        <TextSectionDescription>
          A quick overview of my current and upcoming activities.
        </TextSectionDescription>
      </div>

      <ul className="mx-0 mt-4 list-none  space-y-4">
        {activity.map((
          {
            id,
            title,
            imageUrl,
            comment,
            place,
            type,
            startDate,
            endDate,
          },
        ) => (
          <li key={id}>
            <ActivityCard
              id={id}
              title={title}
              imageUrl={imageUrl}
              comment={comment}
              place={place}
              type={type}
              startDate={startDate}
              endDate={endDate}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Link href="/activities">
          <Button
            aria-label="show all planned activities"
            data-umami-event="main-activities-go-to-all-activities"
            className="text-xs sm:text-sm"
            variant="default"
          >
            Show all planned activities
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default ModuleActivities;
