"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, UserCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Privacy() {
  const privacyFeatures = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your data is encrypted and protected with industry-standard security measures.",
    },
    {
      icon: Lock,
      title: "Secure Development",
      description: "All our applications are built with security-first principles and best practices.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in complete transparency about how we handle your information.",
    },
    {
      icon: UserCheck,
      title: "User Control",
      description: "You maintain full control over your data and can request deletion at any time.",
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy First</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy and security are our top priorities. We implement robust measures to ensure your data remains
            safe and your experience remains private.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-3 mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">GDPR Compliant</h2>
            <p className="text-gray-300">
              We fully comply with GDPR regulations and international privacy standards. Your rights are protected, and
              your data is handled with the utmost care.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
