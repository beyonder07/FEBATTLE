"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

// Typewriter effect hook
function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("")
  const index = useRef(0)
  useEffect(() => {
    setDisplayed("")
    index.current = 0
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (index.current < text.length) {
          index.current++
          return text.slice(0, index.current)
        } else {
          clearInterval(interval)
          return prev
        }
      })
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return displayed
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [showModal, setShowModal] = useState(false)
  const [eventStarted, setEventStarted] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // Set hackathon date (example: June 21, 2025)
    const hackathonDate = new Date("2025-06-21T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = hackathonDate - now

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setEventStarted(true)
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => { setHasMounted(true) }, [])

  const scrollToRegister = () => {
    const element = document.querySelector("#register")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Typewriter for subheadline
  const typewriterText = useTypewriter("Join hundreds of coders to build, learn, and win.", 40)

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay and image */}
      <div className="absolute inset-0">
        <img src="/1000_F_900212167_WvVklmtzpaFHex1Zu6oDC95seYxoquA1.jpg" alt="Hackfinity Hero" className="w-full h-full object-cover object-center absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-80 z-10"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Animated SVG shapes (floating code brackets) */}
      {hasMounted && (
        <>
          <svg className="absolute left-10 top-1/4 w-16 h-16 text-white/20 animate-float-slow z-20" viewBox="0 0 48 48" fill="none"><path d="M18 12L6 24L18 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg className="absolute right-10 bottom-1/4 w-16 h-16 text-white/20 animate-float-slow-rev z-20" viewBox="0 0 48 48" fill="none"><path d="M30 12L42 24L30 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </>
      )}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">FrontEnd Battle - Where Code Meets Creativity</span>
        </h1>

        {/* Typewriter subheadline */}
        <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto min-h-[2.5rem] animate-fade-in">
          {hasMounted ? typewriterText : ''}
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span>June 21-23, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>IIT Bhubaneswar</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-400" />
            <span>500+ Participants</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-md mx-auto mb-8">
          {eventStarted ? (
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl py-6 px-4 shadow-lg text-2xl font-bold animate-pulse">Event Started!</div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center shadow-md animate-fade-in"
                  aria-label={unit}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white animate-pulse drop-shadow-lg flex items-center gap-1">
                    {unit === 'days' && <span className='text-purple-300'>📅</span>}
                    {unit === 'hours' && <span className='text-blue-300'>⏰</span>}
                    {unit === 'minutes' && <span className='text-indigo-300'>🕒</span>}
                    {unit === 'seconds' && <span className='text-pink-300'>⏱️</span>}
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-purple-200 capitalize mt-1">{unit}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setShowModal(true)}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white bg-white/10 hover:bg-white/20 hover:text-purple-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
        {/* Modal for intro video */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-2xl w-full p-0 bg-black">
            <DialogTitle className="sr-only">Event Intro Video</DialogTitle>
            <video src="/homepage.mp4" controls autoPlay className="w-full h-auto rounded-lg" />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
