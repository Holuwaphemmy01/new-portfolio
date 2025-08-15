"use client"
import React from "react"
import { Star, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
]

export default function Projects() {
  return (
    <section className="px-6 py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase">Portfolio</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Selected Works</h2>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center scroll-animate ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
  )
}