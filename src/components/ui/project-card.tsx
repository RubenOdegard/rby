import { TActivity } from "@/types/types";
import Card from "./card";
import Image from "next/image";

export default function ActivityCard(activity: TActivity) {
  return (
    <div className="flex w-full items-center ">
      <Card className="flex shadow-md bg-card w-full md:w-5/6 p-2 overflow-x-auto">
        <div className="bg-red-500 rounded-md aspect-w-1 aspect-h-1">
          <Image
            src=""
            width={500}
            height={500}
            alt="image alt"
            className="object-cover rounded-md w-full h-full"
          />
        </div>
      </Card>
    </div>
  );
}
