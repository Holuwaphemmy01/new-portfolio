"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, Download } from "lucide-react"

export default function About() {
  return (
    <section className="px-6 py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 scroll-animate">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-[3/4] bg-primary rounded-none relative overflow-hidden hover-lift">
                <img src="/femi.png" alt="Professional Portrait" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/20" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border border-primary/10" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 scroll-animate">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-sm font-medium tracking-widest uppercase">About</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                Building the Future
                <br />
                <span className="text-muted-foreground">One Line at a Time</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                With over 5 years of experience in software engineering, I specialize in creating scalable, performant
                applications that solve real-world problems. My expertise spans full-stack development, cloud
                architecture, and modern JavaScript ecosystems.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and collaborative development. Every project
                is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent hover-lift magnetic">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent hover-lift magnetic">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}