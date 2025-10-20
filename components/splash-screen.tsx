"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

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

      <div className="relative z-10 text-center px-6">
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
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Innovate. Code. Create.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Professional development services for Discord bots, websites, Roblox scripts, and desktop applications.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              View Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="glass-strong border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse" />
          <span>{currentStep}</span>
          <span className="text-purple-300 font-semibold">{progress}%</span>
        </motion.div>
      </div>
    </div>
  )
}
