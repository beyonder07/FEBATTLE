"use client"

import { ThemeProvider } from "../contexts/theme-context"
import Loader from "./loader"
import { useEffect, useState } from "react"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    if (typeof window !== "undefined") {
      if (!sessionStorage.getItem("hasLoaded")) {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          sessionStorage.setItem("hasLoaded", "true")
        }, 2200)
      } else {
        setLoading(false)
      }
    }
  }, [])

  if (!hasMounted) return null

  return (
    <ThemeProvider>
      {loading ? <Loader /> : children}
    </ThemeProvider>
  )
} 