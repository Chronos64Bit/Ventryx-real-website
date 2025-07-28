"use client"

import { motion } from "framer-motion"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-blue-600 text-white font-mono flex flex-col justify-center items-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            {/* BSOD Header */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4 mb-4"
              >
                <AlertTriangle className="w-12 h-12" />
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold">CRITICAL_SYSTEM_ERROR</h1>
                  <p className="text-lg opacity-90">
                    A critical error has occurred and the entire Ventryx system must be restarted.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Error Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-700/50 p-6 rounded-lg mb-8 border border-blue-400/30"
            >
              <div className="space-y-2 text-sm md:text-base">
                <p>The problem seems to be caused by the following component: VENTRYX_CORE_SYSTEM</p>
                <p className="mt-4">This is a critical system error that affects the entire application.</p>
                <p>If this screen appears, follow these steps:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Try refreshing the page completely.</li>
                  <li>Clear your browser cache and cookies.</li>
                  <li>Check your internet connection.</li>
                  <li>Contact Ventryx support immediately at hi@ventryx.xyz</li>
                </ul>
              </div>
            </motion.div>

            {/* Technical Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-800/50 p-6 rounded-lg mb-8 border border-blue-400/30"
            >
              <h3 className="text-lg font-bold mb-4">Technical Information:</h3>
              <div className="space-y-1 text-sm">
                <p>
                  *** STOP: 0xCRITICAL (0x{Math.random().toString(16).substr(2, 8).toUpperCase()}, 0x
                  {Math.random().toString(16).substr(2, 8).toUpperCase()}, 0x
                  {Math.random().toString(16).substr(2, 8).toUpperCase()}, 0x
                  {Math.random().toString(16).substr(2, 8).toUpperCase()})
                </p>
                <p>
                  *** ventryx_global.sys - Address {Math.random().toString(16).substr(2, 8).toUpperCase()} base at{" "}
                  {Math.random().toString(16).substr(2, 8).toUpperCase()}, DateStamp{" "}
                  {Math.floor(Date.now() / 1000).toString(16)}
                </p>
                <p>Error: {error.message}</p>
                {error.digest && <p>Digest: {error.digest}</p>}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={reset}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Emergency Restart
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                Force Return Home
              </Button>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center text-sm opacity-75"
            >
              <p>Attempting system recovery...</p>
              <div className="mt-2 flex justify-center">
                <div className="w-64 bg-blue-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, delay: 1.2 }}
                    className="bg-white h-2 rounded-full"
                  />
                </div>
              </div>
              <p className="mt-2">System recovery failed. Manual intervention required.</p>
              <p className="mt-4">Ventryx Critical Error Handler v2.1</p>
            </motion.div>
          </motion.div>
        </div>
      </body>
    </html>
  )
}
