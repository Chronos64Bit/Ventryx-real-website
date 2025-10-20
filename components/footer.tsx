"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass-strong border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/ventryx-logo.png"
                alt="Ventryx"
                width={44}
                height={44}
                className="rounded-2xl border border-white/20 shadow-lg shadow-purple-500/25"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ventryx
              </span>
            </Link>
            <p className="text-gray-400 text-sm">Innovate. Code. Create.</p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} />
              <a href="mailto:flux@ventryx.xyz" className="hover:text-white transition-colors">
                flux@ventryx.xyz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made by Mark <3
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Ventryx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
