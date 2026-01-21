"use client"

import Scene from "@/components/three/Scene"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <Scene entered={entered} />

      {!entered && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: entered ? 0 : 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center text-white pointer-events-none"
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight">NITESH</h1>
          <p className="mt-6 text-lg md:text-xl opacity-70">Digital Systems Designer & Engineer</p>
          <button
            onClick={() => setEntered(true)}
            className="mt-12 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition pointer-events-auto cursor-pointer text-lg"
          >
            Enter Interface
          </button>
        </motion.div>
      )}
    </div>
  )
}