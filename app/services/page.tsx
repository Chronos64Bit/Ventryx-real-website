"use client"

import { motion } from "framer-motion"
import { Bot, Globe, Gamepad2, Monitor, ArrowRight, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "Discord Bots",
      description: "Custom Discord bots with advanced features, moderation tools, and seamless integration.",
      features: ["Custom Commands", "Moderation Tools", "API Integration", "24/7 Uptime"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Features"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Gamepad2,
      title: "Roblox Scripts & GUIs",
      description: "Professional Roblox development including custom scripts and user interfaces.",
      features: ["Custom Scripts", "GUI Design", "Game Logic", "Performance Optimized"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Monitor,
      title: "EXE Applications",
      description: "Desktop applications tailored to your specific needs with modern interfaces.",
      features: ["Cross-Platform", "Modern UI", "Secure Code", "Regular Updates"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions crafted with precision and delivered with excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Zap className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10 group-hover:border-white/40 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
