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
        href="mailto:your.email@example.com"
        className="inline-block px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition text-lg mb-12"
      >
        your.email@example.com
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

      {/* Optional simple form — replace action with Formspree/EmailJS endpoint */}
      {/* <form action="https://formspree.io/f/yourformid" method="POST" className="mt-12 max-w-md mx-auto space-y-6">
        <input type="text" name="name" placeholder="Name" required className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10" />
        <input type="email" name="email" placeholder="Email" required className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10" />
        <textarea name="message" placeholder="Message" rows={5} required className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10"></textarea>
        <button type="submit" className="px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md transition">
          Send Message
        </button>
      </form> */}
    </section>
  )
}