"use client"

import { motion } from "framer-motion"
import { Bot, Globe, Gamepad2, Monitor, ArrowRight, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "Discord Bots",
      description: "Custom Discord bots with advanced features, moderation tools, and seamless integration.",
      features: ["Custom Commands", "Moderation Tools", "API Integration", "24/7 Uptime"],
      color: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Features"],
      color: "from-purple-500 to-pink-500",
      iconBg: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Gamepad2,
      title: "Roblox Scripts & GUIs",
      description: "Professional Roblox development including custom scripts and user interfaces.",
      features: ["Custom Scripts", "GUI Design", "Game Logic", "Performance Optimized"],
      color: "from-green-500 to-emerald-500",
      iconBg: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Monitor,
      title: "EXE Applications",
      description: "Desktop applications tailored to your specific needs with modern interfaces.",
      features: ["Cross-Platform", "Modern UI", "Secure Code", "Regular Updates"],
      color: "from-orange-500 to-red-500",
      iconBg: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="glass rounded-full px-6 py-2 inline-flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Premium Services</span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions crafted with precision and delivered with excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-strong rounded-3xl p-8 h-full border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-5 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-300"
                      >
                        <Zap
                          className={`w-5 h-5 mr-3 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button className="w-full glass-strong text-white hover:glass border border-white/20 hover:border-white/40 group-hover:shadow-lg transition-all duration-300 py-6 text-lg rounded-xl">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
