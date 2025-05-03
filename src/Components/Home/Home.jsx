"use client"

import { useEffect, useState } from "react"

function Home() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      {/* Content Container */}
      <div className="w-full max-w-4xl px-6 py-12 border border-zinc-800 rounded-lg bg-zinc-900/30 backdrop-blur-sm">
        <div className="text-center space-y-8">
          {/* Name */}
          <h1
            className={`cinzel-bold text-5xl md:text-6xl text-white transition-all duration-1000 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            Divyansh Kashyap
          </h1>

          {/* Divider */}
          <div
            className={`w-24 h-0.5 bg-white mx-auto transition-all duration-1000 ${show ? "opacity-100" : "opacity-0"}`}
          ></div>

          {/* Tagline */}
          <p
            className={`mt-4 text-xl text-zinc-300  cinzel-regular tracking-wide transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Full-Stack Developer | Clean Code Enthusiast
          </p>

          {/* Description */}
          <p
            className={`mt-6 text-zinc-400 max-w-2xl font-serif mx-auto transition-all duration-1000 delay-300 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            Building elegant solutions with modern technologies. Passionate about creating clean, efficient, and
            scalable applications.
          </p>

          {/* CTA Button */}
          <div
            className={`mt-8 transition-all duration-1000 delay-500 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#projects"
              className="px-6 py-3 border border-zinc-600 rounded-md hover:bg-zinc-800 transition-all duration-300 cinzel-regular"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
