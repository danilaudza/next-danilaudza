import { projects } from "@/config/item"
import CardProjects from "@/components/card-projects"

const ProjectPage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Projects
        </h1>
        <div className="mt-5 grid md:grid-cols-3">
          {projects.map((items, index) => (
            <CardProjects items={items} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
