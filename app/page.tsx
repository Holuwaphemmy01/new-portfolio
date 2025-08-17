"use client"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Expertise from "@/components/Expertise"
import Projects from "@/components/Projects"
import { ContactSection, Footer } from "@/components/ContactFooter"
import useScrollObserver from "@/hooks/useScrollObserver"

export default function Portfolio() {
  useScrollObserver()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}