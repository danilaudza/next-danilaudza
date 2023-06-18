import {
  databaseItems,
  frameworkItems,
  languageItems,
  libraryItems,
  mediaItems,
} from "@/config/item"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CardSkills from "@/components/card-skills"

const SkillsPage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full flex-col items-start gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Skills
        </h1>
        <Tabs defaultValue="language" className="w-full mx-auto mt-5">
          <TabsList className="grid lg:w-1/2 mx-auto grid-cols-5">
            <TabsTrigger value="language">Language</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="framework">Framework</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>
          <TabsContent value="language">
            <Card>
              <CardHeader>
                <CardTitle>Language</CardTitle>
                <CardDescription>Language that i can use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4">
                  {languageItems.map((items, index) => (
                    <CardSkills index={index} items={items} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="library">
            <Card>
              <CardHeader>
                <CardTitle>Library</CardTitle>
                <CardDescription>Library that i often use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4">
                  {libraryItems.map((items, index) => (
                    <CardSkills index={index} items={items} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="framework">
            <Card>
              <CardHeader>
                <CardTitle>Framework</CardTitle>
                <CardDescription>Framework that i used before</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4">
                  {frameworkItems.map((items, index) => (
                    <CardSkills index={index} items={items} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="database">
            <Card>
              <CardHeader>
                <CardTitle>Database</CardTitle>
                <CardDescription>Data bases.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4">
                  {databaseItems.map((items, index) => (
                    <CardSkills index={index} items={items} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="media">
            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
                <CardDescription>
                  Software that i use to work on medias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4">
                  {mediaItems.map((items, index) => (
                    <CardSkills index={index} items={items} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default SkillsPage
