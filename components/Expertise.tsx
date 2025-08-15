"use client"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Globe, Database, Code, Smartphone } from "lucide-react"

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

export default function Expertise() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase">Expertise</span>
            <div className="w-12 h-px bg-primary" />
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
                <div className="w-full bg-muted rounded-none h-1 skill-bar" style={{ ["--delay" as any]: skill.delay }}>
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
  )
}