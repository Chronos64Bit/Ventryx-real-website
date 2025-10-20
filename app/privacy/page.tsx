"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Database } from "lucide-react"

export default function PrivacyPage() {
  const principles = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We prioritize your privacy and data security above all else",
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "All data is encrypted and stored securely using industry standards",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're transparent about what data we collect and how we use it",
    },
    {
      icon: Database,
      title: "Data Control",
      description: "You have full control over your data and can request deletion anytime",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-glow delay-1000" />
      </div>

      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300">Your privacy and security are our top priorities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-strong rounded-2xl p-6 border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-3 mb-4">
                  <principle.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 border-white/10 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
              <p className="text-gray-300">
                We only collect information necessary to provide our services. This may include contact information,
                project details, and usage data to improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">How We Use Your Data</h2>
              <p className="text-gray-300">
                Your data is used solely to provide and improve our services. We never sell or share your personal
                information with third parties without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Data Security</h2>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your data, including encryption, secure
                servers, and regular security audits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
              <p className="text-gray-300">
                You have the right to access, modify, or delete your data at any time. Contact us at flux@ventryx.xyz
                for any privacy-related requests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our privacy practices, please contact us at flux@ventryx.xyz
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
