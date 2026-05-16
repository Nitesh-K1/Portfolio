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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-premium">NITESH</h1>
          </motion.div>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl opacity-70"
          >
            Digital Systems Designer & Engineer
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(77, 127, 255, 0.4)" }}
            onClick={() => setEntered(true)}
            className="mt-12 px-8 py-4 rounded-full border border-white/30 hover:border-white/60 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition pointer-events-auto cursor-pointer text-lg font-medium shadow-lg"
          >
            Enter Interface
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}