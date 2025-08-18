"use client"
import React from "react"
import { Star, ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
	{
		title: "MintEasy",
		description:
			"Mint Easy is a decentralized application designed to empower creators and collectors by enabling seamless creation, and management of non-fungible tokens (NFTs). Built on Sui BlockChain and React.",
		tech: ["Move", "React"],
		github: "https://github.com/Holuwaphemmy01/Sui_nft_minter_project",
		live: "https://sui-nft-minter-project.vercel.app/",
		image: "/MintEasy.png",
	},
	{
		title: "Akinzo Blog",
		description:
			"Full-stack blog platform built with the MERN stack. Features AI-powered content generation for automated post creation, ImageKit integration for optimized image storage and delivery, rich text editing, user authentication, and responsive design. Includes post management, tagging system, and analytics dashboard.",
		tech: ["Python", "TensorFlow", "React", "D3.js"],
		github: "https://github.com/Holuwaphemmy01/Akinzo-Blog",
		live: "https://akinzo-blog.vercel.app/",
		image: "/ai-analytics-dashboard.png",
	},
	// {
	// 	title: "Collaborative Workspace",
	// 	description:
	// 		"Real-time collaborative platform with live editing, video conferencing, and project management. Built for distributed teams.",
	// 	tech: ["Next.js", "Socket.io", "WebRTC", "MongoDB"],
	// 	github: "#",
	// 	live: "#",
	// 	image: "/collaborative-workspace-realtime-editing.png",
	// },
]

export default function Projects() {
	return (
		<section className="px-6 py-32 bg-muted/20">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20 scroll-animate">
					<div className="flex items-center justify-center gap-4 mb-6">
						<div className="w-12 h-px bg-primary" />
						<span className="text-sm font-medium tracking-widest uppercase">
							Portfolio
						</span>
						<div className="w-12 h-px bg-primary" />
					</div>
					<h2 className="font-heading text-4xl md:text-5xl font-bold">
						Selected Works
					</h2>
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
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							</div>

							<div
								className={`space-y-6 ${
									index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
								}`}
							>
								<div className="space-y-4">
									<div className="flex items-center gap-2">
										<Star className="w-4 h-4 text-primary" />
										<span className="text-sm font-medium tracking-widest uppercase">
											Featured Project
										</span>
									</div>
									<h3 className="font-heading text-3xl font-bold">
										{project.title}
									</h3>
									<p className="text-lg text-muted-foreground leading-relaxed">
										{project.description}
									</p>
								</div>

								<div className="flex flex-wrap gap-3">
									{project.tech.map((tech, techIndex) => (
										<Badge
											key={techIndex}
											variant="outline"
											className="px-3 py-1 hover-lift magnetic"
										>
											{tech}
										</Badge>
									))}
								</div>

								<div className="flex gap-4 pt-4">
									{(() => {
										const hasGithub = project.github && project.github !== "#"
										const hasLive = project.live && project.live !== "#"
										return (
											<>
												{/* Source Code link (anchor styled as button) */}
												<a
													href={hasGithub ? project.github : undefined}
													target="_blank"
													rel="noopener noreferrer"
													className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border transition-colors ${
														hasGithub
															? "bg-transparent hover-lift magnetic"
															: "pointer-events-none opacity-50"
													}`}
													aria-disabled={!hasGithub}
												>
													<Github className="w-4 h-4" />
													<span>Source Code</span>
												</a>

												{/* Live Demo link (anchor styled as button) */}
												<a
													href={hasLive ? project.live : undefined}
													target="_blank"
													rel="noopener noreferrer"
													className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border transition-colors ${
														hasLive
															? "hover-lift magnetic"
															: "pointer-events-none opacity-50"
													}`}
													aria-disabled={!hasLive}
												>
													<ExternalLink className="w-4 h-4" />
													<span>Live Demo</span>
												</a>
											</>
										)
									})()}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}