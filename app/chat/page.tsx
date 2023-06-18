"use client"

import Image from "next/image"
import { useChat } from "ai/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const knownLanguages = ["javascript", "python", "java", "html"]

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  function messageContainsCodeBlock(text: any) {
    return text.includes("```")
  }

  function renderMessageWithCodeBlock(text: any) {
    const parts = text.split("```")
    const renderedParts = parts.map((part: any, index: any) => {
      if (index % 2 === 1) {
        const [language, ...codeLines] = part.trim().split("\n")
        const normalizedLanguage = knownLanguages.includes(
          language.toLowerCase()
        )
          ? language.trim()
          : "text"
        const code = codeLines.join("\n")
        return (
          <pre className="bg-muted rounded-lg p-4 relative my-2">
            <p className="bg-primary text-primary-foreground absolute top-0 left-0 right-0 py-1 px-4 m-0 rounded-t text-sm">
              {normalizedLanguage}
            </p>
            <div className="mt-4">
              <code className="font-mono text-sm">{code}</code>
            </div>
          </pre>
        )
      }
      //
      return <p>{part}</p>
    })
    return renderedParts
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-2 justify-center items-center mb-24">
        {/* <div className="w-full flex flex-col"> */}
        <Image
          src="/assets/shuna-trans.png"
          alt=""
          width={150}
          height={150}
          className="rounded-full"
          priority={true}
        />
        <p>Wanna chat?</p>
        {messages.map((m) => (
          <div key={m.id} className="max-w-3xl w-full">
            {m.role === "user" ? (
              <div className="justify-end flex flex-col items-end">
                <p className="text-muted-foreground">You</p>
                <p className="leading-7 h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background ">
                  {m.content}
                </p>
              </div>
            ) : (
              <div className="justify-start flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar>
                    <AvatarImage src="/assets/shuna.png" />
                    <AvatarFallback>IM</AvatarFallback>
                  </Avatar>
                  <p className="text-muted-foreground">Shuna</p>
                </div>
                <div>
                  {messageContainsCodeBlock(m.content) ? (
                    <div className="leading-7 h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background ">
                      {renderMessageWithCodeBlock(m.content)}
                    </div>
                  ) : (
                    <div>
                      <p className="leading-7 h-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background ">
                        {m.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="bg-primary-foreground to-white fixed pb-10 pt-4 bottom-0 inset-x-0">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg items-center flex gap-2"
          >
            <Input
              value={input}
              placeholder="Say Something.."
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Chat
