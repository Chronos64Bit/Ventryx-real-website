"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
          className="mb-8"
        >
          <div className="w-80 h-80 mx-auto relative">
            <Image
              src="/ventryx-logo.png"
              alt="Ventryx Logo"
              fill
              className="object-contain drop-shadow-2xl rounded-3xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Ventryx</h1>
          <p className="text-xl text-blue-100">Verify with code, not chaos</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-8"
        >
          <div className="w-16 h-1 bg-white mx-auto rounded-full opacity-80" />
        </motion.div>
      </div>
    </motion.div>
  )
}
