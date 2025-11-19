"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "../../Assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact US", path: "/contact" },
  ]

  return (
    <nav className="bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto  h-36 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="navbar_logo">
            <img src={logo} alt="Shazii Enterprises Logo" className="w-28 h-auto" />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 ${link.name === "Services"
                      ? "text-[#DD9E9B] bg-[#F9F9F9] shadow-[0_2px_7px_rgba(0,0,0,0.05)]"
                    : "hover:text-[#DD9E9B]"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-white rounded-full shadow-md p-3 hover:shadow-lg transition-all"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#F3F3F3] shadow-lg rounded-2xl mx-4 mb-3 p-4 animate-fadeIn">
          <ul className="flex flex-col gap-4 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-gray-700 font-medium px-4 py-2 rounded-xl transition-all duration-300 ${link.name === "Services"
                      ? "text-rose-500 shadow-[0_4px_12px_rgba(197,102,136,0.3)]"
                      : "hover:text-rose-400"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
