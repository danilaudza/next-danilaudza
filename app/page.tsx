import FramerBackground from "@/components/framer-background"

export default function IndexPage() {
  return (
    <>
      <FramerBackground />
      <section className="container flex h-full flex-1 items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Dani Laudza
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Hi and Welcome to my personal website
          </p>
        </div>
      </section>
    </>
  )
}
