"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Three.js / R3F", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / Express", level: 80 },
  { name: "UI/UX Design", level: 90 },
  // Add more
]

export default function SkillsModule() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-medium text-center mb-16"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg">{skill.name}</span>
              <span className="opacity-60">{skill.level}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}