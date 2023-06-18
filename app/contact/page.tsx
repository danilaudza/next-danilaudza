import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ContactForm from "./contactform"

const ContactPage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Contact
        </h1>
        <div className="mt-4 border rounded-lg w-full ">
          <div className="container relative h-[800px] items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative h-full hidden  flex-col bg-muted p-10 text-white dark:border-r lg:flex">
              <div
                className="absolute inset-0 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80)",
                }}
              />
              <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                  <p className="text-lg">
                    &ldquo;This library has saved me countless hours of work and
                    helped me deliver stunning designs to my clients faster than
                    ever before. Highly recommended!&rdquo;
                  </p>
                  <footer className="text-sm">Sofia Davis</footer>
                </blockquote>
              </div>
            </div>
            <div className="lg:p-8">
              <Tabs defaultValue="message" className="">
                <TabsList className="mx-auto w-full sm:w-[350px] grid grid-cols-2">
                  <TabsTrigger value="message">Message</TabsTrigger>
                  <TabsTrigger value="link">Links</TabsTrigger>
                </TabsList>
                <TabsContent value="message">
                  <div className="mx-auto flex w-full flex-col justify-center mt-5 space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                      <h1 className="text-2xl font-semibold tracking-tight">
                        Get in touch
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        24/7 i will read your message
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                </TabsContent>
                <TabsContent value="link">
                  <div className="mx-auto flex w-full flex-col justify-center mt-5 space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                      <h1 className="text-2xl font-semibold tracking-tight">
                        Find me here!
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        24/7 i will read your message
                        <div>
                          <Button variant="link">
                            <a
                              href="https://github.com/danilaudza"
                              target="_blank"
                            >
                              @github
                            </a>
                          </Button>
                          <Button variant="link">
                            <a
                              href="https://www.instagram.com/dlaudza/"
                              target="_blank"
                            >
                              @instagram
                            </a>
                          </Button>
                          <Button variant="link">
                            <a
                              href="https://www.youtube.com/@dlaudza"
                              target="_blank"
                            >
                              @youtube
                            </a>
                          </Button>
                          <Button variant="link">
                            <a
                              href="https://t.me/dlaudza"
                              target="_blank"
                            >
                              @telegram
                            </a>
                          </Button>
                        </div>
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
