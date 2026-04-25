"use client"


import { useState } from "react"

import logo from '../../Assets/footarlogo.png'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })



  return (
    <footer className="w-full bg-[#DA9A99] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="navbar_logo">
            <img src={logo} alt="Shazii Enterprises Logo" className="w-80 h-52" />
          </div>
        </div>
          
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info Section */}
 
          <div className="flex flex-col">
          
            <p className="text-sm text-[#fff] leading-relaxed mb-6">
              A multi-faceted team dedicated to excellence in construction, fashion, marketing, event management, dry
              cleaning, and hospitality. We deliver high quality services with innovation at its core.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#C99999] hover:text-[#8B6B6B] transition" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-[#C99999] hover:text-[#8B6B6B] transition" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.837.856c1.021-.609 1.802-1.574 2.165-2.723-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-[#C99999] hover:text-[#8B6B6B] transition" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-[#C99999] hover:text-[#8B6B6B] transition" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="text-[#C99999] hover:text-[#8B6B6B] transition" aria-label="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.035-8.087 0-8.934h3.554v1.264c-.009.015-.021.029-.03.042h.03v-.042c.395-.609 1.1-1.473 2.681-1.473 1.961 0 3.432 1.28 3.432 4.034v5.109zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.957-1.71 1.187 0 1.915.754 1.948 1.71 0 .951-.761 1.71-1.99 1.71zm1.581 11.597H3.714V9.518h3.204v10.934zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className=" flex-1">
            <h3 className="text-sm font-bold text-[#fff] text-center uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-center">
              <li>
                <a href="#" className="text-sm text-[#fff] hover:text-[#6B5B5B] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#fff] hover:text-[#6B5B5B] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#fff] hover:text-[#6B5B5B] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#fff] hover:text-[#6B5B5B] transition">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Learn More Links */}
          <div className="  items-center justify-center">
            <h3 className="text-sm font-semibold text-[#fff] text-center mb-6 uppercase tracking-wider">Learn More</h3>
            <ul className="space-y-3 text-center" >
              <li>
                <a href="#" className="text-sm  text-[#fff] hover:text-[#6B5B5B] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#fff] hover:text-[#6B5B5B] transition">
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#fff] hover:text-[#6B5B5B] transition">
                  Give Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-semibold text-[#fff] mb-6 uppercase tracking-wider">Get In Touch</h3>
            <form  className="space-y-4">
             <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  className="w-full px-4 py-3 rounded-lg bg-[#D9A5A5] border border-[#D9A5A5] text-white placeholder-[#FFE5E5] focus:outline-none focus:ring-2 focus:ring-[#C99999] text-sm shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow duration-300"

/>

              <input
  type="email"
  name="email"
  placeholder="youremail@example.com"
  value={formData.email}
  className="w-full px-4 py-3 rounded-lg bg-[#D9A5A5] border border-[#D9A5A5] text-white placeholder-[#FFE5E5] focus:outline-none focus:ring-2 focus:ring-[#C99999] text-sm shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow duration-300"
/>

       <button
  type="submit"
  className="w-full px-6 py-3 bg-[#D9A5A5] hover:bg-[#C99999] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_0_12px_rgba(255,255,255,0.8)] hover:shadow-[0_0_20px_rgba(255,255,255,1)]"
>
  Get in Touch With Us
  <span>→</span>
</button>


            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
