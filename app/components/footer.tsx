import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import React from "react"

export default function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/frontendbattle", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/frontendbattle", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  ]

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Timeline", href: "#timeline" },
    { label: "Register", href: "#register" },
  ]

  const supportLinks = [
    { label: "FAQ", href: "#" },
    { label: "Code of Conduct", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              FrontEnd Battle
            </h3>
            <p className="text-gray-300 mb-6">
              Where Innovation Meets Infinity. Join us for the ultimate 48-hour coding marathon and build the future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <a
                  href="mailto:hello@frontendbattle.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  hello@frontendbattle.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                <span className="text-gray-300">
                  IIT Bhubaneswar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold text-center mb-6">Our Sponsors</h4>
          <div className="flex flex-col items-center justify-center min-h-[100px]">
            {/* Chrome Dino Runner Animation */}
            <DinoRunnerAnimation />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} FrontEnd Battle. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ for the developer community</p>
        </div>
      </div>
    </footer>
  )
}

function DinoRunnerAnimation() {
  // Simple canvas-based dino runner animation (non-interactive)
  // Dino and cactus are simple shapes for demo purposes
  // This is a fun placeholder, not a full game
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let frame = 0
    let dinoY = 60
    let jump = false
    let jumpVel = 0
    let cactusX = 300
    function drawDino(y: number) {
      ctx.save()
      ctx.fillStyle = '#a78bfa'
      ctx.fillRect(40, y, 30, 30) // body
      ctx.fillStyle = '#fff'
      ctx.fillRect(60, y + 10, 10, 10) // head
      ctx.restore()
    }
    function drawCactus(x: number) {
      ctx.save()
      ctx.fillStyle = '#38bdf8'
      ctx.fillRect(x, 70, 10, 30)
      ctx.fillRect(x - 5, 80, 5, 10)
      ctx.fillRect(x + 10, 80, 5, 10)
      ctx.restore()
    }
    function drawGround() {
      ctx.save()
      ctx.strokeStyle = '#8884'
      ctx.beginPath()
      ctx.moveTo(0, 100)
      ctx.lineTo(320, 100)
      ctx.stroke()
      ctx.restore()
    }
    function animate() {
      ctx.clearRect(0, 0, 320, 120)
      drawGround()
      drawDino(dinoY)
      drawCactus(cactusX)
      // Dino jump logic
      if (jump) {
        dinoY += jumpVel
        jumpVel += 1.2 // gravity
        if (dinoY >= 60) {
          dinoY = 60
          jump = false
          jumpVel = 0
        }
      } else if (frame % 120 === 0) {
        jump = true
        jumpVel = -14
      }
      // Cactus movement
      cactusX -= 4
      if (cactusX < -20) cactusX = 340 + Math.random() * 40
      frame++
      requestAnimationFrame(animate)
    }
    animate()
    return () => { ctx.clearRect(0, 0, 320, 120) }
  }, [])
  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} width={320} height={120} className="rounded-lg bg-gray-800 border border-gray-700 shadow-lg" />
      <span className="text-xs text-gray-400 mt-2">Enjoy a mini Dino runner while we find sponsors!</span>
    </div>
  )
}
