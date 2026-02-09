"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutModule() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-medium text-center mb-16"
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
            <Image
              src=""
              alt="Nitesh"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg opacity-80"
        >
          <p>
            Hi, I'm Nitesh — a Digital Systems Designer & Engineer passionate about crafting immersive, high-performance web experiences.
          </p>
          <p>
            I blend creative design with robust engineering to build systems that feel alive. From 3D interactive interfaces to scalable backend architectures, I love pushing the boundaries of what's possible on the web.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new tech, sketching UI concepts, or diving into systems thinking.
          </p>
        </motion.div>
      </div>
    </section>
  )
}