import { Button } from "@/components/ui/button"
import FramerBackground from "@/components/framer-background"

export default function IndexPage() {
  return (
    <>
      <FramerBackground />
      <section className="container flex min-h-screen items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Dani Laudza
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Hi and Welcome to my personal website
          </p>
        </div>
      </section>

      <section className="container flex flex-col justify-center">
        <h2 className="mb-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Latest Upload
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative flex justify-center">
            <div className="absolute h-1/2 w-1/2 bottom-0 bg-red-600 opacity-70 blur-3xl dark:bg-purple-600 dark:opacity-40"></div>
            <div className="relative min-h-max self-center overflow-hidden rounded-xl sm:h-72 md:h-96">
              <iframe
                className="aspect-video h-full"
                src="https://www.youtube-nocookie.com/embed?listType=playlist&list=PLmTyU5d9Kg_cG-ZrjsvNxkHcVxVAN1PqL&rel=0&controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              This is my YouTube
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I use this red platform to store videos that I work on in my spare
              time. this could be free storage right? I also sometimes live
              stream on this channel.
            </p>
            <Button variant="link">
              <a
                href="https://www.youtube.com/@dlaudza"
                target="_blank"
                rel="noreferrer"
              >
                @Here Click Me!
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-20 bg-black">
        <div className="flex h-64 items-center justify-center">
          <p className="text-white">
            Gud Bro👍
          </p>
        </div>
      </section>
    </>
  )
}
