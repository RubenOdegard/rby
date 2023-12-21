import { formatMonthYear, getActivityStatus } from "@/lib/utils";
import {
  BookOpen,
  CalendarCheck,
  CalendarClock,
  CalendarHeart,
  MapPin,
} from "lucide-react";
import Card from "./card";
import { TActivity } from "@/types/types";

const getIconType = (startDate: string, endDate: string) => {
  const activityStatus = getActivityStatus(startDate, endDate);

  switch (activityStatus) {
    case "completed":
      return <CalendarCheck size={14} className="text-foreground" />;
    case "ongoing":
      return <CalendarClock size={14} className="text-foreground" />;
    case "planned":
      return <CalendarHeart size={14} className="text-foreground" />;
    default:
      return null;
  }
};

export default function ActivityCard(activity: TActivity) {
  const calendarIcon = getIconType(activity.startDate, activity.endDate);
  return (
    <>
      <Card className="shadow-md bg-card p-4 md:p-6">
        <div key={activity.id} className="relative flex gap-x-4">
          <div>
            <div className="flex flex-col md:flex-row justify-between gap-x-4 gap-y-0.5">
              <div className="py-0.5 text-xs md:text-base leading-5">
                <span className="font-semibold flex gap-2 items-center tracking-tight text-foreground">
                  <BookOpen size={16} className="text-foreground" />
                  {activity.title}
                </span>
              </div>
              <div className="md:hidden inline-block h-0.5 bg-primary-foreground">
              </div>
              <time className="flex flex-row-reverse font-semibold justify-end md:flex-row gap-2 ml-[1px] mt-0.5 md:mt-0 md:pl-0 items-center py-0.5 text-xs  md:text-sm leading-5 text-foreground transition-all duration-150">
                <div className="">
                  {formatMonthYear(activity.startDate)}
                  {" " + "-" + " "}
                  {formatMonthYear(activity.endDate)}
                </div>
                <div className="">
                  {calendarIcon}
                </div>
              </time>
            </div>
            <span className="text-xs flex items-center gap-1 md:text-sm text-foreground">
              <MapPin
                size={14}
                className="ml-[1px] mr-[4px] md:mr-[5px] md:ml-[1px] text-foreground"
              />
              {activity.place}: {activity.type}
            </span>
            <p className="text-xs leading-4 mt-2.5 text-muted-foreground bg-card shadow-inner md:mt-2 transition-all duration-150 border py-1.5 px-2 rounded-md ">
              {activity.comment}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
