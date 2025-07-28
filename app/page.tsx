"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Bot, Gamepad2, Monitor, Users, Clock, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const floatingIcons = [
    { icon: Code, delay: 0 },
    { icon: Bot, delay: 0.2 },
    { icon: Gamepad2, delay: 0.4 },
    { icon: Monitor, delay: 0.6 },
  ]

  const stats = [
    { icon: Users, label: "Happy Clients", value: "20+" },
    { icon: Clock, label: "Projects Completed", value: "37+" },
    { icon: Award, label: "Years Experience", value: "3+" },
    { icon: Heart, label: "Custom Requests", value: "Always" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
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
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white/20 px-8 py-4 text-lg"
                >
                  Request Custom Work
                </Button>
              </Link>
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
                className="absolute hidden md:block"
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

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Choose Ventryx?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a dedicated team of developers passionate about creating exceptional digital experiences. From
              Discord communities to web applications, we bring your ideas to life with clean code and innovative
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">We Accept Custom Requests</h3>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Have a unique project in mind? We love challenges! Whether it's a complex Discord bot, a specialized web
              application, or a custom Roblox script, we're here to make it happen. Your vision drives our innovation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
