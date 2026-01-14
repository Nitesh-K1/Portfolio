"use client"

import { motion } from "framer-motion"
import Scene from "@/components/three/Scene"

export default function HeroMonolith() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Scene />
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          NITESH
        </h1>
        <p className="mt-4 text-lg opacity-70">
          Digital Systems Designer & Engineer
        </p>

        <button className="mt-10 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition">
          Enter Interface
        </button>
      </motion.div>
    </section>
  )
}
