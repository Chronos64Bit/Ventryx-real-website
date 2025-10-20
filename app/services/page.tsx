"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Gamepad2, Monitor, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Discord Bots",
      description: "Custom Discord bots tailored to your server's needs",
      gradient: "from-blue-600 to-cyan-500",
      features: [
        "Moderation & Auto-moderation",
        "Custom commands & interactions",
        "Music & entertainment features",
        "Ticket systems & support bots",
        "Economy & leveling systems",
        "Advanced logging & analytics",
      ],
    },
    {
      icon: Palette,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge tech",
      gradient: "from-purple-600 to-pink-500",
      features: [
        "Responsive design for all devices",
        "SEO optimization",
        "Fast loading times",
        "Modern frameworks (Next.js, React)",
        "Database integration",
        "API development",
      ],
    },
    {
      icon: Gamepad2,
      title: "Roblox Development",
      description: "Professional scripts and GUIs for enhanced experiences",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Custom game scripts",
        "Professional GUI design",
        "Game mechanics implementation",
        "Admin systems",
        "Anti-cheat systems",
        "Performance optimization",
      ],
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful Windows applications with modern interfaces",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Native Windows applications",
        "Modern UI/UX design",
        "Database management",
        "File system operations",
        "System integrations",
        "Auto-update functionality",
      ],
    },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-glow delay-1000" />
      </div>

      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional development solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="glass-strong border-white/10 h-full hover:border-white/20 transition-all">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 shadow-lg`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-lg shadow-xl shadow-purple-500/30"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
