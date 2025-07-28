"use client"

import { motion } from "framer-motion"
import { Heart, Code, Shield } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image src="/ventryx-logo.png" alt="Ventryx" width={40} height={30} className="drop-shadow-lg" />
            <span className="text-2xl font-bold text-white">Ventryx</span>
          </div>

          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Verify with code, not chaos. Building the future of digital solutions, one project at a time.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Code className="w-4 h-4" />
              <span className="text-sm">Clean Code</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Privacy First</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with Care</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ventryx. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
