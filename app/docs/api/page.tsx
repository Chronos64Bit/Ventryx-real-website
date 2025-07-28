"use client"

import { motion } from "framer-motion"
import { Code, Copy, CheckCircle, ExternalLink, Shield, Database, Webhook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExamples = {
    curl: `curl -X POST https://ventryx.xyz/api/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "your_verification_token",
    "userId": "123456789012345678",
    "guildId": "987654321098765432",
    "username": "TestUser",
    "discriminator": "1234",
    "avatar": "a1b2c3d4e5f6g7h8i9j0",
    "webhookUrl": "https://discord.com/api/webhooks/..."
  }'`,
    javascript: `const response = await fetch('https://ventryx.xyz/api/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: 'your_verification_token',
    userId: '123456789012345678',
    guildId: '987654321098765432',
    username: 'TestUser',
    discriminator: '1234',
    avatar: 'a1b2c3d4e5f6g7h8i9j0',
    webhookUrl: 'https://discord.com/api/webhooks/...'
  })
});

const data = await response.json();
console.log(data);`,
    python: `import requests

url = "https://ventryx.xyz/api/verify"
payload = {
    "token": "your_verification_token",
    "userId": "123456789012345678",
    "guildId": "987654321098765432",
    "username": "TestUser",
    "discriminator": "1234",
    "avatar": "a1b2c3d4e5f6g7h8i9j0",
    "webhookUrl": "https://discord.com/api/webhooks/..."
}

response = requests.post(url, json=payload)
data = response.json()
print(data)`,
    discordjs: `// Discord.js v14 example
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Verify your account with Ventryx'),
    
    async execute(interaction) {
        const token = generateVerificationToken(); // Your token generation logic
        const verifyUrl = \`https://ventryx.xyz/verify?token=\${token}&user_id=\${interaction.user.id}\`;
        
        const embed = new EmbedBuilder()
            .setTitle('🔐 Account Verification')
            .setDescription(\`Click the link below to verify your account:\n\n[\${verifyUrl}](\${verifyUrl})\`)
            .setColor(0x5865F2)
            .setFooter({ text: 'This link expires in 10 minutes' });
        
        await interaction.reply({ embeds: [embed], ephemeral: true });
        
        // Store token in your database with expiration
        await storeVerificationToken(token, interaction.user.id, interaction.guild.id);
    }
};`,
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ventryx Verification API</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive documentation for integrating Discord bot verification with IP logging and webhook support.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-400" />
                API Overview
              </CardTitle>
              <CardDescription className="text-gray-300">
                The Ventryx Verification API provides a secure endpoint for Discord bot verification with automatic IP
                logging and webhook integration.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <Database className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">IP Logging</h3>
                  <p className="text-gray-300 text-sm">Automatically captures and stores user IP addresses</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <Webhook className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">Webhook Support</h3>
                  <p className="text-gray-300 text-sm">Send verification data to Discord channels</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <Shield className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">Secure</h3>
                  <p className="text-gray-300 text-sm">Token-based verification with validation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Endpoint Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Endpoint Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">POST</span>
                  <code className="text-blue-300 text-lg">/api/verify</code>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                This endpoint handles Discord user verification, captures IP addresses, and optionally sends data to
                Discord webhooks.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Note:</strong> This API is designed for Discord bots and requires proper token validation.
                  Rate limiting is applied to prevent abuse.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Request Parameters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Request Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white">Parameter</th>
                      <th className="text-left py-3 px-4 text-white">Type</th>
                      <th className="text-left py-3 px-4 text-white">Required</th>
                      <th className="text-left py-3 px-4 text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">
                        <code className="text-blue-300">token</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-red-400">Yes</span>
                      </td>
                      <td className="py-3 px-4">Verification token generated by your bot</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">
                        <code className="text-blue-300">userId</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-red-400">Yes</span>
                      </td>
                      <td className="py-3 px-4">Discord user ID (snowflake)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">
                        <code className="text-blue-300">guildId</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-gray-400">No</span>
                      </td>
                      <td className="py-3 px-4">Discord server ID where verification occurred</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">
                        <code className="text-blue-300">username</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-gray-400">No</span>
                      </td>
                      <td className="py-3 px-4">Discord username</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">
                        <code className="text-blue-300">discriminator</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-gray-400">No</span>
                      </td>
                      <td className="py-3 px-4">Discord discriminator (legacy)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">
                        <code className="text-blue-300">avatar</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-gray-400">No</span>
                      </td>
                      <td className="py-3 px-4">Discord avatar hash</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">
                        <code className="text-blue-300">webhookUrl</code>
                      </td>
                      <td className="py-3 px-4">string</td>
                      <td className="py-3 px-4">
                        <span className="text-gray-400">No</span>
                      </td>
                      <td className="py-3 px-4">Discord webhook URL for logging</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Response Format */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Response Format</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Success Response (200)</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() =>
                      copyToClipboard(
                        JSON.stringify(
                          {
                            success: true,
                            message: "Verification completed successfully!",
                            data: {
                              userId: "123456789012345678",
                              verifiedAt: "2024-01-15T10:30:00.000Z",
                              ip: "192.168.1.1",
                              id: 12345,
                            },
                          },
                          null,
                          2,
                        ),
                        "success-response",
                      )
                    }
                  >
                    {copiedCode === "success-response" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <pre className="text-green-300 text-sm overflow-x-auto">
                    {JSON.stringify(
                      {
                        success: true,
                        message: "Verification completed successfully!",
                        data: {
                          userId: "123456789012345678",
                          verifiedAt: "2024-01-15T10:30:00.000Z",
                          ip: "192.168.1.1",
                          id: 12345,
                        },
                      },
                      null,
                      2,
                    )}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Error Response (400/401/500)</h3>
                <div className="bg-gray-900/50 rounded-lg p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() =>
                      copyToClipboard(
                        JSON.stringify(
                          {
                            success: false,
                            error: "Missing required fields: token and userId",
                            message: "Invalid request",
                          },
                          null,
                          2,
                        ),
                        "error-response",
                      )
                    }
                  >
                    {copiedCode === "error-response" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <pre className="text-red-300 text-sm overflow-x-auto">
                    {JSON.stringify(
                      {
                        success: false,
                        error: "Missing required fields: token and userId",
                        message: "Invalid request",
                      },
                      null,
                      2,
                    )}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-400" />
                Code Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(codeExamples).map(([language, code]) => (
                <div key={language}>
                  <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                    {language === "discordjs" ? "Discord.js" : language}
                  </h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(code, language)}
                    >
                      {copiedCode === language ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <pre className="text-gray-300 text-sm overflow-x-auto pr-12">
                      <code>{code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Rate Limiting & Security */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Rate Limiting & Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Rate Limits</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 10 requests per minute per IP</li>
                    <li>• 100 requests per hour per IP</li>
                    <li>• 1000 requests per day per IP</li>
                    <li>• Burst limit: 5 requests per 10 seconds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Security Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Token validation required</li>
                    <li>• IP address logging and monitoring</li>
                    <li>• Request validation and sanitization</li>
                    <li>• HTTPS only (TLS 1.2+)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Database Schema */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Database Schema</CardTitle>
              <CardDescription className="text-gray-300">
                The verification data is stored in a MySQL database with the following structure:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900/50 rounded-lg p-4 relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={() =>
                    copyToClipboard(
                      `CREATE TABLE verifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    discord_user_id VARCHAR(20) NOT NULL,
    verification_token VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    referer VARCHAR(500),
    guild_id VARCHAR(20),
    username VARCHAR(32),
    discriminator VARCHAR(4),
    avatar VARCHAR(255),
    verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('verified', 'pending', 'failed', 'revoked') DEFAULT 'verified',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`,
                      "schema",
                    )
                  }
                >
                  {copiedCode === "schema" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
                <pre className="text-blue-300 text-sm overflow-x-auto pr-12">
                  <code>{`CREATE TABLE verifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    discord_user_id VARCHAR(20) NOT NULL,
    verification_token VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    referer VARCHAR(500),
    guild_id VARCHAR(20),
    username VARCHAR(32),
    discriminator VARCHAR(4),
    avatar VARCHAR(255),
    verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('verified', 'pending', 'failed', 'revoked') DEFAULT 'verified',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Support & Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">Need help integrating the Ventryx Verification API? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Email Support
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
