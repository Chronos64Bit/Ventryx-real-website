"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content:
        "We implement industry-standard security measures to protect your data. All information is encrypted and stored securely.",
    },
    {
      icon: Lock,
      title: "Secure Development",
      content:
        "Every project is built with security-first principles. We follow best practices to ensure your applications are safe and reliable.",
    },
    {
      icon: Eye,
      title: "Transparency",
      content:
        "We believe in complete transparency. You'll always know how we handle your data and what we do with your information.",
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content:
        "You have full control over your data. Request access, modifications, or deletion at any time. We respect your privacy rights.",
    },
  ]

  return (
    <div className="relative pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy First</h1>
          <p className="text-xl text-gray-400">Your privacy and security are our top priorities</p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-strong rounded-2xl p-8 border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-2.5 flex-shrink-0">
                  <section.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-strong rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">GDPR Compliant</h3>
          <p className="text-gray-400">
            We fully comply with GDPR regulations and international privacy standards. Your data is protected and your
            rights are respected.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
