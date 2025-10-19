"use client"

import { motion } from "framer-motion"
import { Check, Shield, Users, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data security is our top priority",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Tailored solutions for your needs",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times guaranteed",
    },
    {
      icon: Check,
      title: "Quality Assured",
      description: "High standards in every project",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Us?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We deliver exceptional results with a commitment to quality and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-strong border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 mb-4">
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
