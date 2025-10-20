"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SplashScreen from "@/components/splash-screen"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash")
    if (hasSeenSplash) {
      setShowSplash(false)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    sessionStorage.setItem("hasSeenSplash", "true")
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
