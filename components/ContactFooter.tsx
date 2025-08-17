"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-4xl mx-auto text-center space-y-12 scroll-animate">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase">Contact</span>
            <div className="w-16 h-px bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
            Let's Create
            <br />
            <span className="text-muted-foreground">Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to bring your vision to life? I'm always excited to discuss new opportunities and challenging
            projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Button size="lg" className="gap-3 hover-lift magnetic px-8 py-6 text-lg">
            <Mail className="w-5 h-5" />
            jacoboluwafemi72@gmail.com
          </Button>
          <a
            href="https://www.linkedin.com/in/oluwafemi-victor-holuwaphemmy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-6 text-lg rounded-md border border-border/20 hover-lift magnetic bg-transparent"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© 2025 Oluwafemi Victor Jacob</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="hover-lift magnetic">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift magnetic">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift magnetic">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}