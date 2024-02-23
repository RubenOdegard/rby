import { formatMonthYear, getActivityStatus } from "@/lib/utils";
import {
  BookOpen,
  CalendarCheck,
  CalendarClock,
  CalendarHeart,
  MapPin,
} from "lucide-react";
import Card from "@/components/ui/container-card";
import { TActivity } from "@/types/types";

const getIconType = (startDate: string, endDate: string) => {
  const activityStatus = getActivityStatus(startDate, endDate);

  switch (activityStatus) {
    case "completed":
      return <CalendarCheck size={14} className="text-yellow-400" />;
    case "ongoing":
      return <CalendarClock size={14} className="text-yellow-400" />;
    case "planned":
      return <CalendarHeart size={14} className="text-yellow-400" />;
    default:
      return null;
  }
};

export default function ActivityCard(activity: TActivity) {
  const calendarIcon = getIconType(activity.startDate, activity.endDate);
  return (
    <>
      <Card className="bg-card p-4 shadow-md md:p-6">
        <div key={activity.id} className="relative flex gap-x-4">
          <div className="flex w-full flex-col">
            <div className="flex flex-col justify-between gap-x-4 gap-y-0.5 md:flex-row">
              <div className="py-0.5 text-xs leading-5 md:text-base">
                <span className="flex items-center gap-2 font-semibold tracking-tight ">
                  <BookOpen size={16} className="text-yellow-400" />
                  {activity.title}
                </span>
              </div>
              <div className="inline-block h-0.5 bg-primary-foreground md:hidden">
              </div>
              <time className="ml-[1px] mt-0.5 flex flex-row-reverse items-center justify-end gap-2 py-0.5 text-xs font-normal leading-5 text-foreground/90 transition-all  duration-150 md:mt-0 md:flex-row md:pl-0 md:text-sm">
                <div className="">
                  {formatMonthYear(activity.startDate)}
                  {" " + "-" + " "}
                  {formatMonthYear(activity.endDate)}
                </div>
                <div className="text-foreground/90">
                  {calendarIcon}
                </div>
              </time>
            </div>
            <span className="flex items-center gap-1 text-xs text-foreground/90 md:text-sm">
              <MapPin
                size={14}
                className="ml-[1px] mr-[4px] text-yellow-400 md:ml-[1px] md:mr-[5px]"
              />
              {activity.place}: {activity.type}
            </span>
            <p className="mt-2.5 rounded-md border bg-card px-2 py-1.5 text-xs leading-4 text-muted-foreground shadow-inner transition-all duration-150 md:mt-2 ">
              {activity.comment}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
