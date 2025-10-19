"use client"

import { motion } from "framer-motion"
import { Heart, Code, Shield, Github, Twitter, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ]

  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 glass rounded-2xl p-2">
                  <Image src="/ventryx-logo.png" alt="Ventryx" fill className="object-contain p-1" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white block">Ventryx</span>
                  <span className="text-xs text-blue-400">Code without chaos</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Building the future of digital solutions, one project at a time. Professional development services for
                Discord, web, Roblox, and desktop applications.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-3 rounded-xl hover:glass-strong transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Services", "Privacy", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer inline-block"
                      >
                        {item}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-3">
                {["Discord Bots", "Websites", "Roblox Scripts", "Applications"].map((item) => (
                  <li key={item}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer inline-block"
                    >
                      {item}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {[
              { icon: Code, text: "Clean Code" },
              { icon: Shield, text: "Privacy First" },
              { icon: Heart, text: "Made with Care" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-full px-6 py-3 flex items-center gap-2"
              >
                <feature.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Ventryx. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
