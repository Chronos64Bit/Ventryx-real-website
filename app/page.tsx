"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Palette, Gamepad2, Monitor, Shield, Zap, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: Code2,
      title: "Discord Bots",
      description: "Custom bots with powerful features and seamless integration",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Web Development",
      description: "Modern, responsive websites that captivate your audience",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Gamepad2,
      title: "Roblox Scripts",
      description: "Professional GUIs and scripts for enhanced gameplay",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Monitor,
      title: "Desktop Apps",
      description: "Powerful Windows applications with sleek interfaces",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const stats = [
    { value: "258+", label: "Discord Members" },
    { value: "150+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ]

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-glow delay-2000" />
      </div>

      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <Image
              src="/ventryx-logo.png"
              alt="Ventryx"
              width={160}
              height={160}
              className="rounded-3xl shadow-2xl shadow-purple-500/30 animate-float"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Innovate. Code. Create.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Professional development services for Discord bots, websites, Roblox scripts, and desktop applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="glass-strong border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {[
              { icon: Shield, text: "Privacy First" },
              { icon: Zap, text: "Fast Delivery" },
              { icon: Star, text: "Top Quality" },
            ].map((item, idx) => (
              <div key={idx} className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <item.icon className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-400">Professional solutions for all your development needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-strong rounded-2xl p-8 border-white/10 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">Let's bring your project to life together</p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-lg shadow-2xl shadow-purple-500/40"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
