"use client"

import { motion } from "framer-motion"

export default function ContactModule() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-medium mb-16"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xl opacity-70 mb-12"
      >
        I'm always open to interesting opportunities and collaborations.
      </motion.p>

      <motion.a
        href="mailto:niteshkafle23@gmail.com"
        className="inline-block px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition text-lg mb-12"
      >
        niteshkafle23@gmail.com
      </motion.a>

      <div className="flex justify-center gap-8">
        {["GitHub", "LinkedIn", "Twitter/X", "Behance"].map((platform) => (
          <motion.a
            key={platform}
            href={`https://${platform.toLowerCase()}.com/yourusername`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-lg opacity-60 hover:opacity-100 transition"
          >
            {platform}
          </motion.a>
        ))}
      </div>
    </section>
  )
}