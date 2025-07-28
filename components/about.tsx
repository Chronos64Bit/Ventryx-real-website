"use client"

import { motion } from "framer-motion"
import { Users, Clock, Award, Heart } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Clock, label: "Projects Completed", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Heart, label: "Custom Requests", value: "Always" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">About Ventryx</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a dedicated team of developers passionate about creating exceptional digital experiences. From Discord
            communities to web applications, we bring your ideas to life with clean code and innovative solutions.
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
  )
}
