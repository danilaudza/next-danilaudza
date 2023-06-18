import { timelineData } from "@/config/data"
import Timeline from "@/components/timeline"

const AboutPage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          About me
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hi, my name is Dani Laudza{" "}
          <span className="text-muted-foreground text-sm">
            (Actually Dhany Laudza but it's fine)
          </span>
          . An ordinary guy who has an interest in design, videography, and
          programming. A graduate of the UGM Computer Science study program who
          used to be a bounty hunter from videography competitions. A ordinary
          guy a jobdesc decoration-perpetual documentation at every level of
          education. Anyway, feel free explore my website. 😊
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Experience
        </h2>
        <Timeline data={timelineData} />
      </div>
    </section>
  )
}

export default AboutPage
