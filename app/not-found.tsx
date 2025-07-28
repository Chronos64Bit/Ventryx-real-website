"use client"

import { motion } from "framer-motion"
import { Home, Search, AlertCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
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
            <AlertCircle className="w-12 h-12" />
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">PAGE_NOT_FOUND</h1>
              <p className="text-lg opacity-90">The requested page could not be located in the Ventryx system.</p>
            </div>
          </motion.div>
        </div>

        {/* 404 Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold mb-4 opacity-50">404</div>
          <p className="text-xl md:text-2xl">IRQL_NOT_LESS_OR_EQUAL</p>
        </motion.div>

        {/* Error Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-blue-700/50 p-6 rounded-lg mb-8 border border-blue-400/30"
        >
          <div className="space-y-2 text-sm md:text-base">
            <p>The problem seems to be caused by the following file: MISSING_PAGE.HTML</p>
            <p className="mt-4">If this is the first time you've seen this error screen, check the URL.</p>
            <p>If this screen appears again, follow these steps:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Verify that the URL is spelled correctly.</li>
              <li>Check if the page has been moved or renamed.</li>
              <li>Try navigating from the home page.</li>
              <li>Contact Ventryx support if you believe this is an error.</li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-blue-800/50 p-6 rounded-lg mb-8 border border-blue-400/30"
        >
          <h3 className="text-lg font-bold mb-4">Technical Information:</h3>
          <div className="space-y-1 text-sm">
            <p>
              *** STOP: 0x00000404 (0x{Math.random().toString(16).substr(2, 8).toUpperCase()}, 0x
              {Math.random().toString(16).substr(2, 8).toUpperCase()}, 0x
              {Math.random().toString(16).substr(2, 8).toUpperCase()}, 0x
              {Math.random().toString(16).substr(2, 8).toUpperCase()})
            </p>
            <p>
              *** ventryx_router.sys - Address {Math.random().toString(16).substr(2, 8).toUpperCase()} base at{" "}
              {Math.random().toString(16).substr(2, 8).toUpperCase()}, DateStamp{" "}
              {Math.floor(Date.now() / 1000).toString(16)}
            </p>
            <p>Requested URL: {typeof window !== "undefined" ? window.location.pathname : "/unknown"}</p>
            <p>Status Code: 404 - Not Found</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
          </Link>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Services
            </Button>
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center text-sm opacity-75"
        >
          <p>Collecting error information...</p>
          <div className="mt-2 flex justify-center">
            <div className="w-64 bg-blue-800 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.4 }}
                className="bg-white h-2 rounded-full"
              />
            </div>
          </div>
          <p className="mt-2">Error collection complete.</p>
          <p className="mt-4">Ventryx - Verify with code, not chaos.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
