"use client"
import React, { useEffect, useState } from "react"
import AnimatedName from "./AnimatedName"
import { Button } from "@/components/ui/button"
import { Mail, Github, ArrowRight, User } from "lucide-react"

export default function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => setCursorPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", updateCursor)
    return () => window.removeEventListener("mousemove", updateCursor)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-primary/10 animate-float"></div>
        <div
          className="absolute top-1/3 right-20 w-px h-24 bg-primary/15 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-px h-16 bg-primary/20 animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-8 h-px bg-primary/10 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className="cursor-follower hidden md:block"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />

      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
        <div className="animate-scale-in mb-16">
          <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center hover-lift animate-glow mb-8">
            <User className="w-12 h-12 text-primary-foreground" />
          </div>
          <div className="w-32 h-px bg-primary/20 mx-auto" />
        </div>

        <div className="space-y-8">
          <AnimatedName name="OLUWAFEMI JACOB" />

          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight animate-slide-up leading-none">
            SOFTWARE
            <br />
            <span className="text-muted-foreground">ENGINEER</span>
          </h1>

          <div className="w-24 h-px bg-primary mx-auto animate-slide-up stagger-2" />

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3 font-light">
            Crafting digital experiences through innovative code, elegant architecture, and user-centered design
            philosophy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12 animate-slide-up stagger-4">
            <Button size="lg" className="gap-3 magnetic hover-lift px-8 py-6 text-lg font-medium">
              <Mail className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-3 bg-transparent magnetic hover-lift px-8 py-6 text-lg">
              <Github className="w-5 h-5" />
              Explore Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}