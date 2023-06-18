import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    // <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 bg-red-600 h-full">
    <section className="container flex-1 flex justify-center items-center gap-6 pb-8 pt-6 md:py-10 h-full">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Dani Laudza
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hi and Welcome to my personal website
        </p>
      </div>
    </section>
  )
}
