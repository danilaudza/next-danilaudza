import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const CardSkills = ({ index, items }: any) => {
  return (
    <Card key={index} className="flex flex-col items-center justify-center">
      <CardContent className="mt-8">
        <Image src={items.img} alt="" width={100} height={100} />
      </CardContent>
      <CardFooter>
        <CardDescription>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">{items.name}</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{items.name}</h4>
                <p className="text-sm">{items.desc}</p>
                <div className="flex  items-end justify-end pt-2">
                  <a href={items.link} target="_blank" rel="noreferrer">
                    <Button variant="default" className="text-xs ">
                      Here!
                    </Button>
                  </a>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default CardSkills
