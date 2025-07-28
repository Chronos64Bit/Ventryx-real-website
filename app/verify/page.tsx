"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Loader2, Shield, AlertCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function VerifyPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Get parameters from URL (token, user_id, etc.)
        const token = searchParams.get("token")
        const userId = searchParams.get("user_id")

        if (!token || !userId) {
          setStatus("error")
          setMessage("Invalid verification link. Missing required parameters.")
          return
        }

        // Call verification API
        const response = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            userId,
          }),
        })

        const data = await response.json()

        if (response.ok) {
          setStatus("success")
          setMessage(data.message || "Verification completed successfully!")
        } else {
          setStatus("error")
          setMessage(data.error || "Verification failed. Please try again.")
        }
      } catch (error) {
        console.error("Verification error:", error)
        setStatus("error")
        setMessage("An unexpected error occurred. Please try again.")
      }
    }

    verifyUser()
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <AnimatePresence mode="wait">
          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-6"
                >
                  <Loader2 className="w-16 h-16 text-blue-400" />
                </motion.div>

                <h1 className="text-2xl font-bold text-white mb-4">Verifying Your Identity</h1>
                <p className="text-gray-300 mb-6">Please wait while we verify your Discord account with Ventryx...</p>

                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Checking Discord credentials...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Validating server membership...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Recording verification data...
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 mx-auto mb-6"
                >
                  <CheckCircle className="w-16 h-16 text-green-400" />
                </motion.div>

                <h1 className="text-2xl font-bold text-white mb-4">Verification Complete!</h1>
                <p className="text-gray-300 mb-6">{message}</p>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-green-400">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-semibold">You are now verified with Ventryx</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400">You can now close this window and return to Discord.</p>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 mx-auto mb-6"
                >
                  <AlertCircle className="w-16 h-16 text-red-400" />
                </motion.div>

                <h1 className="text-2xl font-bold text-white mb-4">Verification Failed</h1>
                <p className="text-gray-300 mb-6">{message}</p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-red-400">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Please try again or contact support</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400">Contact us at hi@ventryx.xyz if this problem persists.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
