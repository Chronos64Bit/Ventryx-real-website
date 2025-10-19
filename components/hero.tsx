"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Bot, Gamepad2, Monitor, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const floatingIcons = [
    { icon: Code, delay: 0, color: "from-blue-400 to-cyan-400" },
    { icon: Bot, delay: 0.2, color: "from-purple-400 to-pink-400" },
    { icon: Gamepad2, delay: 0.4, color: "from-green-400 to-emerald-400" },
    { icon: Monitor, delay: 0.6, color: "from-orange-400 to-red-400" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="glass-strong rounded-full px-6 py-3 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Trusted by 258+ Discord members</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">Code Solutions</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
              Without Chaos
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional Discord bots, stunning websites, Roblox scripts, and custom applications.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              {" "}
              Your vision, our expertise.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="glass-strong text-white hover:glass px-10 py-6 text-lg rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  Request Custom Work
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <div className="relative h-48">
          {floatingIcons.map(({ icon: Icon, delay, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 1, duration: 0.5 }}
              className="absolute"
              style={{
                left: `${15 + index * 20}%`,
                top: `${Math.sin(index) * 30 + 30}px`,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                className="glass-strong p-6 rounded-3xl border border-white/20 group hover:border-white/40 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className={`w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r ${color}`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
