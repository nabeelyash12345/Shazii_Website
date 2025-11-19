import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

import logo from "../../Assets/logo.png";
import Marketoos from '../../Assets/JAN&SONSTILES.png';
import line from '../../Assets/32.png';
import Footer from '../ItemCard/footer';



function Marke() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      <nav className="bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto h-36 flex items-center justify-between px-6 py-4">
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
                  className={`text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    link.name === "Home"
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
            {isOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>

      {isOpen && (
  <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#F3F3F3] p-6 z-50 overflow-auto">
    <ul className="flex flex-col gap-4 text-center mt-36">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`block text-gray-700 font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
              link.name === "Services"
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

      <section className="relative min-h-screen bg-[#F3F3F3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8 py-12 lg:py-0">
              {/* Brand Title */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">JAN&SONS TILES</h1>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                JAN & SONS Tiles offers high-quality tiles for homes, offices, and commercial spaces. From classic to
                modern designs, we provide durable, stylish, and affordable flooring solutions to match every interior.
                Your trusted partner in building beauty that lasts.
              </p>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 pt-4">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Youtube size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Send size={20} /></a>
              </div>

              {/* Team Avatars */}
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">Our Expert Team</span>
              </div>
               <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">Service Selection Process</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            At JAN&SONS, we ensure a seamless and efficient process for our clients to choose and avail our services.
            Follow these easy steps to get started.
          </p>
        </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative h-96 lg:h-full lg:min-h-screen flex items-center justify-center">
              <img src={Marketoos} alt="Project" className="object-contain h-full w-full" />
            </div>
          </div>
        </div>
         <div className="max-w-7xl mx-auto  px-32 bg-[#F3F3F3]  flex items-center justify-between ">

              <img src={line} alt="Project" className="object-contain h-full w-full" />
              </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">Our services</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
Our team at Marketos.pk is passionate and hardworking, driven by a commitment to excellence. With expert skills and a dedicated approach, we strive to deliver outstanding results, 
          </p>
        </div>
      </section>
        <Footer/>
     
      
    </>
  );
}

export default Marke;
