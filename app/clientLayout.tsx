"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import SplashScreen from "@/components/splash-screen"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem("ventryx-splash-shown")

    if (splashShown) {
      setShowSplash(false)
      return
    }

    const timer = setTimeout(() => {
      setShowSplash(false)
      sessionStorage.setItem("ventryx-splash-shown", "true")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <AnimatePresence mode="wait">
            {showSplash ? (
              <SplashScreen key="splash" />
            ) : (
              <div key="main">
                <Header />
                <main className="pt-20">{children}</main>
              </div>
            )}
          </AnimatePresence>
        </div>
      </body>
    </html>
  )
}
