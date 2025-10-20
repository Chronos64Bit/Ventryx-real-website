"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Star } from "lucide-react"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState("Booting up Ventryx...")

  const steps = [
    { progress: 25, label: "Syncing services..." },
    { progress: 50, label: "Preparing experience..." },
    { progress: 75, label: "Verifying quality..." },
    { progress: 100, label: "Deploying interface..." },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        const newProgress = prev + 2
        const currentStepData = steps.find((step) => newProgress <= step.progress)
        if (currentStepData) {
          setCurrentStep(currentStepData.label)
        }
        return newProgress
      })
    }, 30)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-900 flex items-center justify-center z-50">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-glow delay-2000" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <div className="glass-strong rounded-3xl p-5 shadow-2xl shadow-purple-500/30">
            <div className="relative w-32 h-32 rounded-3xl border border-white/20 overflow-hidden">
              <Image src="/ventryx-logo.png" alt="Ventryx" fill className="object-contain" priority />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Verify With Code, Not Chaos
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Professional development services for Discord bots, websites, Roblox scripts, and desktop applications. Your
          vision, our expertise.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[{ icon: Shield, text: "Privacy First" }, { icon: Zap, text: "Rapid Delivery" }, { icon: Star, text: "Premier Quality" }].map(
            (item, idx) => (
              <div key={idx} className="glass rounded-full px-4 py-2 flex items-center gap-2">
                <item.icon className="w-4 h-4 text-purple-300" />
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ),
          )}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-lg mx-auto glass-strong rounded-3xl p-6 border border-white/20"
        >
          <div className="h-2 overflow-hidden rounded-full bg-white/10 mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-300">
            <span>{currentStep}</span>
            <span className="text-purple-300 font-semibold">{progress}%</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
