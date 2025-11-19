"use client"

import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"
import aboutus from '../../Assets/aboutus.png'

export function AboutUs() {
  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row">
      {/* Left Content Section */}
      <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-rose-300 to-rose-400 p-8 lg:p-12 xl:p-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">About Us</h1>
            <p className="text-lg text-white/90 lg:text-xl">Key points about company</p>
          </div>

          {/* Description */}
          <p className="max-w-md text-sm leading-relaxed text-white/80 lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          {/* Navigation Links */}
          <nav className="space-y-3">
            {["History", "Quality", "Future"].map((item) => (
              <button
                key={item}
                className="w-full justify-start text-left text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition lg:w-auto"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex items-center gap-4">
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Instagram, label: "Instagram" },
            { icon: Youtube, label: "YouTube" },
            { icon: Send, label: "Telegram" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-1 lg:flex-[1.2]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutus})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-rose-400/20" />
        </div>
      </div>
    </div>
  )
}
