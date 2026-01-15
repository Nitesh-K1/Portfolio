"use client"

import { motion } from "framer-motion"
import Scene from "@/components/three/Scene"

export default function HeroMonolith() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0E1116] via-[#0B0D10] to-black">
      <Scene />
      <div className="pointer-events-none absolute inset-0 z-5 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl md:text-7xl font-medium tracking-[-0.02em]">
          NITESH
        </h1>
        <p className="mt-6 text-base md:text-lg opacity-60">
          Digital Systems Designer & Engineer
        </p>

        <button className="mt-12 px-7 py-3 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition">
          Enter Interface
        </button>
      </motion.div>
    </section>
  )
}
