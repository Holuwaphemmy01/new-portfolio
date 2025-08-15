"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Download,
  User,
  ArrowRight,
  Star,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Portfolio() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursor)
    return () => window.removeEventListener("mousemove", updateCursor)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const skills = [
    { name: "JavaScript/TypeScript", level: 95, delay: "0s" },
    { name: "React/Next.js", level: 90, delay: "0.2s" },
    { name: "Node.js", level: 85, delay: "0.4s" },
    { name: "Python", level: 80, delay: "0.6s" },
    { name: "SQL/NoSQL", level: 85, delay: "0.8s" },
    { name: "AWS/Cloud", level: 75, delay: "1s" },
    { name: "GraphQL", level: 70, delay: "1.2s" },
    { name: "Docker", level: 65, delay: "1.4s" },
    { name: "Kubernetes", level: 60, delay: "1.6s" },
    { name: "Blockchain", level: 55, delay: "1.8s" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Advanced analytics platform powered by machine learning algorithms. Real-time data processing with interactive visualizations and predictive insights.",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      github: "#",
      live: "#",
      image: "/ai-analytics-dashboard.png",
    },
    {
      title: "Collaborative Workspace",
      description:
        "Real-time collaborative platform with live editing, video conferencing, and project management. Built for distributed teams.",
      tech: ["Next.js", "Socket.io", "WebRTC", "MongoDB"],
      github: "#",
      live: "#",
      image: "/collaborative-workspace-realtime-editing.png",
    },
    {
      title: "Collaborative Workspace",
      description:
        "Real-time collaborative platform with live editing, video conferencing, and project management. Built for distributed teams.",
      tech: ["Next.js", "Socket.io", "WebRTC", "MongoDB"],
      github: "#",
      live: "#",
      image: "/collaborative-workspace-realtime-editing.png",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Advanced analytics platform powered by machine learning algorithms. Real-time data processing with interactive visualizations and predictive insights.",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      github: "#",
      live: "#",
      image: "/ai-analytics-dashboard.png",
    },
    
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div
        className="cursor-follower hidden md:block"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />

      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-px h-32 bg-primary/10 animate-float"></div>
          <div
            className="absolute top-1/3 right-20 w-px h-24 bg-primary/15 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-px h-16 bg-primary/20 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-8 h-px bg-primary/10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
          <div className="animate-scale-in mb-16">
            <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center hover-lift animate-glow mb-8">
              <User className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="w-32 h-px bg-primary/20 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Animated per-letter name */}
            <p
              className="text-2xl md:text-3xl font-semibold text-primary animate-slide-up stagger-1 name-animated"
              aria-label="OLUWAFEMI JACOB"
            >
              {"OLUWAFEMI JACOB".split("").map((ch, i) => (
                <span
                  key={i}
                  className="inline-block name-letter"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </p>

            {/* Local CSS for the animated name (keeps file self-contained).
                Uses Google Font (Poppins) and keeps the continuous staggered animation */}
            <style>
              {`
              /* Import Google font for the name */
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');

              :root { --name-font: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

              .name-animated {
                font-family: var(--name-font);
                font-weight: 700;
                letter-spacing: 0.02em;
              }

              /* continuous staggered reveal + fade-out so the sequence repeats */
              .name-letter {
                display: inline-block;
                opacity: 0;
                transform: translateY(8px);
                animation: letterPulse 2.6s cubic-bezier(.2,.9,.3,1) infinite;
                will-change: transform, opacity;
              }

              @keyframes letterPulse {
                0%   { opacity: 0; transform: translateY(8px); }
                10%  { opacity: 1; transform: translateY(0); }
                60%  { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-6px); }
              }
            `}
            </style>

            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight animate-slide-up leading-none">
              SOFTWARE
              <br />
              <span className="text-muted-foreground">ENGINEER</span>
            </h1>
            <div className="w-24 h-px bg-primary mx-auto animate-slide-up stagger-2"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3 font-light">
              Crafting digital experiences through innovative code, elegant architecture, and user-centered design
              philosophy.
            </p>
          </div>

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
      </section>

      <section className="px-6 py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 scroll-animate">
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-[3/4] bg-primary rounded-none relative overflow-hidden hover-lift">
                  <img
                    src="/femi.png"
                    alt="Professional Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/20"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 border border-primary/10"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8 scroll-animate">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-primary"></div>
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

      <section className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-sm font-medium tracking-widest uppercase">Expertise</span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Technical Mastery</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8 scroll-animate">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-none h-1 skill-bar" style={{ "--delay": skill.delay } as any}>
                    <div
                      className="bg-primary h-1 rounded-none transition-all duration-1500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 scroll-animate">
              {[
                { icon: Globe, label: "Web Development", desc: "Modern frameworks & libraries" },
                { icon: Database, label: "Database Design", desc: "SQL & NoSQL optimization" },
                { icon: Code, label: "API Development", desc: "RESTful & GraphQL APIs" },
                { icon: Smartphone, label: "Mobile Apps", desc: "Cross-platform solutions" },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4 hover-lift magnetic p-6 border border-border/50">
                  <item.icon className="w-8 h-8 mx-auto text-primary" />
                  <div>
                    <p className="font-medium mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-sm font-medium tracking-widest uppercase">Portfolio</span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Selected Works</h2>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center scroll-animate ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group hover-lift">
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium tracking-widest uppercase">Featured Project</span>
                    </div>
                    <h3 className="font-heading text-3xl font-bold">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="px-3 py-1 hover-lift magnetic">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" className="gap-2 bg-transparent hover-lift magnetic">
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                    <Button className="gap-2 hover-lift magnetic">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12 scroll-animate">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-primary"></div>
              <span className="text-sm font-medium tracking-widest uppercase">Contact</span>
              <div className="w-16 h-px bg-primary"></div>
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
              hello@example.com
            </Button>
            <Button variant="outline" size="lg" className="gap-3 bg-transparent hover-lift magnetic px-8 py-6 text-lg">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">© 2024 Software Engineer Portfolio</p>
              <p className="text-xs text-muted-foreground mt-1">
                Crafted with Next.js, Tailwind CSS, and attention to detail
              </p>
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
    </div>
  )
}
