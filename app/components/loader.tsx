"use client"
import { useEffect, useRef, useState } from "react"

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let start = 0
    const duration = 2000 // 2 seconds
    const step = 10 // ms
    const increment = 100 / (duration / step)
    intervalRef.current = setInterval(() => {
      start += increment
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(intervalRef.current as NodeJS.Timeout)
          return 100
        }
        return prev + increment
      })
    }, step)
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Animated blurred gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-xs">
        {/* Horizontal progress bar */}
        <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden mb-4 shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-lg font-semibold text-white mb-6">{Math.round(progress)}%</span>
        <h2 className="text-4xl font-bold text-white mb-2">FrontEnd Battle 2025</h2>
        <p className="text-purple-200 text-lg mb-2">Loading the future...</p>
      </div>
    </div>
  )
}
