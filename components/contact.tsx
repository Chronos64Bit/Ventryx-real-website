"use client"

import { motion } from "framer-motion"
import { Send, MessageCircle, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Join our server for instant support",
      action: "Join Server",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed message",
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within 24 hours",
      action: "Learn More",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your project to life? We'd love to hear about your ideas and discuss how we can help make
            them reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input
                  placeholder="Project Type (Discord Bot, Website, etc.)"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                        <p className="text-gray-300 text-sm">{method.description}</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">Custom Request Policy</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We welcome all types of custom requests! Whether you need a unique Discord bot feature, a specialized
                web application, or something completely different, we're here to help. No project is too small or too
                complex.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
