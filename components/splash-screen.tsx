"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState("Initializing...")

  const steps = [
    { progress: 25, label: "Loading assets..." },
    { progress: 50, label: "Preparing components..." },
    { progress: 75, label: "Setting up routes..." },
    { progress: 100, label: "Almost ready..." },
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
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center z-50">
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
          className="mb-8"
        >
          <Image
            src="/ventryx-logo.png"
            alt="Ventryx"
            width={140}
            height={140}
            className="mx-auto rounded-3xl shadow-2xl shadow-purple-500/30 animate-float"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Ventryx
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 mb-12"
        >
          Innovate. Code. Create.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="glass-strong rounded-full h-3 overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">{currentStep}</span>
            <span className="text-purple-400 font-semibold">{progress}%</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
