import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

const CardProjects = ({items,index}:any) => {
  return (
    <Card key={index}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={items.ava} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{items.title}</CardTitle>
            <CardDescription>{items.last_updated}</CardDescription>
          </div>
        </div>
        <div className="space-x-1">
          {items.badge.map((badges:any, index:any) => (
            <Badge key={index} variant="outline">
              {badges}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{items.desc}</p>
        <p className="mt-2 text-sm text-muted-foreground">{items.comment}</p>
        <a href={items.link}>
          <Button className="mt-2" variant="default">
            See project here!
            <Icons.move className="ml-1" />
          </Button>
        </a>
      </CardContent>
      <CardFooter>
        <div className="no-scrollbar flex overflow-x-auto">
          {items.tech.map((techies:any, index:any) => (
            <div
              key={index}
              className="mx-1 text-sm underline decoration-solid"
            >
              {techies}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardProjects
