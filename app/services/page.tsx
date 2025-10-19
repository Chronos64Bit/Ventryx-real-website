"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Gamepad2, Monitor, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Discord Bots",
      description:
        "Custom Discord bots tailored to your server's needs with advanced moderation, automation, and unique features.",
      features: ["Custom Commands", "Auto-Moderation", "Music & Entertainment", "Server Management", "API Integration"],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies. From landing pages to full web applications.",
      features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Modern UI/UX", "Custom Features"],
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Gamepad2,
      title: "Roblox Scripts & GUIs",
      description: "Professional Roblox development including custom scripts, GUIs, and game enhancements.",
      features: ["Custom Scripts", "GUI Design", "Game Mechanics", "Performance Optimized", "Full Support"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful Windows desktop applications with modern interfaces and robust functionality.",
      features: ["Modern UI", "Cross-Platform", "Secure Code", "Auto Updates", "Full Documentation"],
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="relative pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional development services tailored to your specific needs
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-strong rounded-3xl p-8 md:p-12 border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 shadow-lg`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
