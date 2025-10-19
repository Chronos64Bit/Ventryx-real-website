"use client"

import Link from "next/link"
import { Mail, Github, Twitter, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: "/services", label: "Services" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
  ]

  const socials = [
    { icon: Mail, href: "mailto:flux@ventryx.xyz", label: "Email" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="relative border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image src="/ventryx-logo.png" alt="Ventryx" fill className="object-contain p-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ventryx
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Professional development services for Discord bots, websites, Roblox scripts, and desktop applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl glass hover:glass-strong flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} Ventryx. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Verify With Code, Not Chaos</p>
        </div>
      </div>
    </footer>
  )
}
