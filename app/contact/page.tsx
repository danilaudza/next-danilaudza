import React from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ContactForm from "./contactform"

const ContactPage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Contact
        </h1>
        <div className="mt-4 w-full rounded-lg border ">
          <div className="container relative grid h-[800px] items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full  flex-col bg-muted p-10 text-white dark:border-r lg:flex">
              <div
                className="absolute inset-0 rounded-l-lg bg-cover"
                style={{
                  backgroundImage: "url(/contact.jpg)",
                }}
              />
              <div className="relative z-20 mt-auto"></div>
            </div>
            <div className="lg:p-8">
              <Tabs defaultValue="message" className="">
                <TabsList className="mx-auto grid w-full grid-cols-2 sm:w-[350px]">
                  <TabsTrigger value="message">Message</TabsTrigger>
                  <TabsTrigger value="link">Links</TabsTrigger>
                </TabsList>
                <TabsContent value="message">
                  <div className="mx-auto mt-5 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
                  <div className="mx-auto mt-5 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                      <h1 className="text-2xl font-semibold tracking-tight">
                        Find me here!
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        24/7 i will read your message
                      </p>
                      <div>
                        <Button variant="link">
                          <a
                            href="https://github.com/danilaudza"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @github
                          </a>
                        </Button>
                        <Button variant="link">
                          <a
                            href="https://www.instagram.com/dlaudza/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @instagram
                          </a>
                        </Button>
                        <Button variant="link">
                          <a
                            href="https://www.youtube.com/@dlaudza"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @youtube
                          </a>
                        </Button>
                        <Button variant="link">
                          <a
                            href="https://t.me/dlaudza"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @telegram
                          </a>
                        </Button>
                      </div>
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
