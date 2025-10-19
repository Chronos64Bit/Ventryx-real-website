"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check, Code2, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const curlExample = `curl -X POST https://ventryx.xyz/api/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "your-verification-token",
    "userId": "123456789012345678",
    "username": "JohnDoe",
    "avatar": "avatar-hash",
    "webhookUrl": "https://discord.com/api/webhooks/..."
  }'`

  const javascriptExample = `const response = await fetch('https://ventryx.xyz/api/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: 'your-verification-token',
    userId: '123456789012345678',
    username: 'JohnDoe',
    avatar: 'avatar-hash',
    webhookUrl: 'https://discord.com/api/webhooks/...'
  })
});

const data = await response.json();
console.log(data);`

  const pythonExample = `import requests

url = "https://ventryx.xyz/api/verify"
payload = {
    "token": "your-verification-token",
    "userId": "123456789012345678",
    "username": "JohnDoe",
    "avatar": "avatar-hash",
    "webhookUrl": "https://discord.com/api/webhooks/..."
}

response = requests.post(url, json=payload)
print(response.json())`

  const nodeExample = `// Example Discord Bot Integration (using any Discord library)

// When user clicks verify button in Discord
async function handleVerification(interaction) {
  const verificationToken = generateToken(); // Your token generation logic
  const verifyUrl = \`https://ventryx.xyz/verify?token=\${verificationToken}&user_id=\${interaction.user.id}\`;
  
  // Send verification link to user
  await interaction.reply({
    content: \`Click here to verify: \${verifyUrl}\`,
    ephemeral: true
  });
}

// Your webhook will receive the verification data
// Set up your webhook URL in Discord server settings`

  const responseExample = `{
  "success": true,
  "message": "Verification completed successfully!",
  "data": {
    "userId": "123456789012345678",
    "verifiedAt": "2024-10-19T16:59:57.000Z",
    "ip": "192.168.1.1"
  }
}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-700" />
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-1000" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ventryx Verification API
            </h1>
            <p className="text-xl text-gray-300">Simple, secure user verification for Discord bots</p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Zap, title: "Fast", desc: "Lightning-quick verification" },
              { icon: Shield, title: "Secure", desc: "IP tracking & validation" },
              { icon: Code2, title: "Simple", desc: "Easy REST API integration" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="glass border-white/10 hover:border-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Start */}
          <Card className="glass-strong border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">🚀 Quick Start</CardTitle>
              <CardDescription className="text-gray-300">
                Get started with the Ventryx Verification API in minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">1. Generate a Verification Token</h4>
                  <p className="text-gray-300 text-sm">
                    Create a unique token for each verification request in your Discord bot.
                  </p>
                </div>
                <div className="glass p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">2. Send User to Verification Page</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Direct users to:{" "}
                    <code className="bg-black/30 px-2 py-1 rounded text-purple-400">
                      https://ventryx.xyz/verify?token=TOKEN&user_id=USER_ID
                    </code>
                  </p>
                </div>
                <div className="glass p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">3. Receive Webhook Data</h4>
                  <p className="text-gray-300 text-sm">
                    Get verification data (including IP) sent to your Discord webhook automatically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Reference */}
          <Card className="glass-strong border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">📖 API Reference</CardTitle>
              <CardDescription className="text-gray-300">Complete API documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Endpoint */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Endpoint</h3>
                  <div className="glass p-4 rounded-lg border border-white/10">
                    <code className="text-purple-400">POST https://ventryx.xyz/api/verify</code>
                  </div>
                </div>

                {/* Request Parameters */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Request Parameters</h3>
                  <div className="glass rounded-lg border border-white/10 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-black/30">
                        <tr>
                          <th className="px-4 py-3 text-left text-white text-sm">Parameter</th>
                          <th className="px-4 py-3 text-left text-white text-sm">Type</th>
                          <th className="px-4 py-3 text-left text-white text-sm">Required</th>
                          <th className="px-4 py-3 text-left text-white text-sm">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-4 py-3 text-purple-400 font-mono text-sm">token</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">string</td>
                          <td className="px-4 py-3 text-green-400 text-sm">Yes</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">Verification token</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-purple-400 font-mono text-sm">userId</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">string</td>
                          <td className="px-4 py-3 text-green-400 text-sm">Yes</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">Discord user ID</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-purple-400 font-mono text-sm">guildId</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">string</td>
                          <td className="px-4 py-3 text-gray-400 text-sm">No</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">Discord server ID</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-purple-400 font-mono text-sm">username</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">string</td>
                          <td className="px-4 py-3 text-gray-400 text-sm">No</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">Discord username</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-purple-400 font-mono text-sm">avatar</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">string</td>
                          <td className="px-4 py-3 text-gray-400 text-sm">No</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">Avatar hash</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-purple-400 font-mono text-sm">webhookUrl</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">string</td>
                          <td className="px-4 py-3 text-gray-400 text-sm">No</td>
                          <td className="px-4 py-3 text-gray-300 text-sm">Discord webhook URL</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Response */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Response Example</h3>
                  <div className="relative glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-3 bg-black/30 border-b border-white/10">
                      <span className="text-sm text-gray-400">JSON Response</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(responseExample, "response")}
                        className="h-8 hover:bg-white/10"
                      >
                        {copiedCode === "response" ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300">{responseExample}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Examples */}
          <Card className="glass-strong border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">💻 Code Examples</CardTitle>
              <CardDescription className="text-gray-300">Integration examples in multiple languages</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="grid w-full grid-cols-4 glass border border-white/10">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="bot">Discord Bot</TabsTrigger>
                </TabsList>

                <TabsContent value="curl" className="mt-4">
                  <div className="relative glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-3 bg-black/30 border-b border-white/10">
                      <span className="text-sm text-gray-400">cURL</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(curlExample, "curl")}
                        className="h-8 hover:bg-white/10"
                      >
                        {copiedCode === "curl" ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300">{curlExample}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="javascript" className="mt-4">
                  <div className="relative glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-3 bg-black/30 border-b border-white/10">
                      <span className="text-sm text-gray-400">JavaScript</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(javascriptExample, "js")}
                        className="h-8 hover:bg-white/10"
                      >
                        {copiedCode === "js" ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300">{javascriptExample}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="python" className="mt-4">
                  <div className="relative glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-3 bg-black/30 border-b border-white/10">
                      <span className="text-sm text-gray-400">Python</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(pythonExample, "python")}
                        className="h-8 hover:bg-white/10"
                      >
                        {copiedCode === "python" ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300">{pythonExample}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="bot" className="mt-4">
                  <div className="relative glass rounded-lg border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-3 bg-black/30 border-b border-white/10">
                      <span className="text-sm text-gray-400">Discord Bot Integration</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(nodeExample, "node")}
                        className="h-8 hover:bg-white/10"
                      >
                        {copiedCode === "node" ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300">{nodeExample}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Rate Limits */}
          <Card className="glass-strong border-white/10 mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-white">⚡ Rate Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-300">
                <p>• 100 requests per minute per IP address</p>
                <p>• 1000 requests per hour per IP address</p>
                <p className="text-sm text-gray-400 mt-4">Need higher limits? Contact us at flux@ventryx.xyz</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
