import { activity } from "@/config/activites";
import ActivityCard from "@/components/activity-card";
import { Button } from "./ui/button";
import Link from "next/link";

const ModuleActivities = () => {
  return (
    <article className="space-y-4 md:space-y-6">
      <h3 className="text-lg md:text-xl lg:text-2xl ">
        Activity Monitor
      </h3>
      <p className="text-muted-foreground">
        A quick overview of my current and upcoming activities, either recently
        completed, ongoing or planned for the near future.
      </p>

      <ul className="list-none mx-0 mt-4  space-y-4">
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
