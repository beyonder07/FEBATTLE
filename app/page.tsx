"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./contexts/theme-context"
import Loader from "./components/loader"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Tracks from "./components/tracks"
import Gallery from "./components/gallery"
import Timeline from "./components/timeline"
import Register from "./components/register"
import Footer from "./components/footer"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Tracks />
          <Gallery />
          <Timeline />
          <Register />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
