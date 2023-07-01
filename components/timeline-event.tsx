import Image from "next/image"
import { MapPin } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const TimelineEvent = ({ date, event, desc, where, img, fallback }: any) => {
  if (!Array.isArray(desc)) {
    return null // or handle the non-array case accordingly
  }

  return (
    <div className="relative">
      {/* <div className="absolute top-5 -left-3.5 h-6 w-6 rounded-full border-4"> */}
      <Avatar className="absolute left-[-2.15rem] top-5 h-16 w-16 rounded-full">
        <AvatarImage src={img} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      {/* </div> */}
      <Card className="ml-10">
        <CardHeader>
          <CardDescription>{date}</CardDescription>
          <CardTitle>{event}</CardTitle>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {desc.map((items: any, index: any) => (
              <li key={index}>{items}</li>
            ))}
          </ul>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4 text-sky-400" />
            {where}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TimelineEvent
