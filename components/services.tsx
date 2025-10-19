"use client"

import { motion } from "framer-motion"
import { Bot, Code, Sparkles, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "Discord Bots",
      description: "Custom Discord bots with advanced features, moderation, and automation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Roblox Development",
      description: "Professional GUIs and scripts for enhanced Roblox experiences",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Desktop Applications",
      description: "Powerful EXE applications for Windows with modern interfaces",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="glass-strong border-white/10 hover:border-white/20 transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
