"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Project One",
    description: "A next-gen digital system built with React, Three.js, and Node.js. Features real-time data visualization.",
    tech: ["React", "Three.js", "Node.js", "Tailwind"],
    link: "https://github.com/yourusername/project-one",
    image: "/placeholder-project1.jpg", // Replace with your screenshots
  },
  // Add more projects here
]

export default function ProjectsModule() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-medium text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <div className="aspect-video relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
              <p className="opacity-70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}