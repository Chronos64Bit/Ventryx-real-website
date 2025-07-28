"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Bot, Gamepad2, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const floatingIcons = [
    { icon: Code, delay: 0 },
    { icon: Bot, delay: 0.2 },
    { icon: Gamepad2, delay: 0.4 },
    { icon: Monitor, delay: 0.6 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Code Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Without Chaos
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional Discord bots, stunning websites, Roblox scripts, and custom applications. Your vision, our
            expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Request Custom Work
            </Button>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <div className="relative">
          {floatingIcons.map(({ icon: Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 1, duration: 0.5 }}
              className="absolute"
              style={{
                left: `${20 + index * 20}%`,
                top: `${Math.sin(index) * 50 + 50}px`,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
