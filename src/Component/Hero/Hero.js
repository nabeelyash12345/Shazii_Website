import React, { useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import haaderImg from "../../Assets/header.png";
import BgImage from "../../Assets/bgimage.png";
import MainCard from "../ItemCard/ItemCard";
import logo from "../../Assets/logo.png";
import project from "../../Assets/Project.png";

import { TeamSection } from "../ItemCard/team-section";
import ImageGrid from "../ItemCard/ImageGrid";
import { AboutUs } from "../ItemCard/about-us";
import WhatWeDo from "../ItemCard/what-we-do";
import ClientTestimony from "../ItemCard/client-testimony";
import Footer from "../ItemCard/footer";



function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 fixed w-full top-0 z-50 ">
        {/* Logo */}
        <div className="flex items-center">
          <div className=" h-10">
            <img
              src={logo}
              alt="Shazii Enterprises Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white font-medium">
          <li>
            <a
              href="/"
              className="hover:bg-black/40 px-3 py-1 rounded transition"
            >
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-pink-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-pink-500 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-pink-500 transition">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/70 backdrop-blur-sm flex flex-col items-center py-4 space-y-4 md:hidden z-40">
          <a
            href="/"
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition"
          >
            Home
          </a>
          <a
            href="/services"
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition"
          >
            Services
          </a>
          <a
            href="/showroom"
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition"
          >
            Showroom
          </a>
          <a
            href="/about"
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition"
          >
            About Us
          </a>
          <a
            href="/contact"
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition"
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-32 pb-16 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start md:w-1/2 space-y-4">
          <div className="bg-black/30 p-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              SHAZII ENTERPRISES
            </h1>
            <p className="text-lg text-white/90">
              Our Business is to bring smile on your face
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={haaderImg}
            alt="Shazii Enterprises Team"
            className="w-[90%] max-w-lg rounded-3xl shadow-[ -8px_-8px_20px_rgba(255,255,255,0.8),_8px_8px_20px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Social Icons at the bottom of background */}
        <div className="absolute bottom-10 left-40 transform -translate-x-1/2 flex space-x-4 z-20">
          <a href="#facebook" className="p-2 bg-white rounded-full shadow-md hover:bg-pink-100 transition">
            <Facebook size={20} />
          </a>
          <a href="#twitter" className="p-2 bg-white rounded-full shadow-md hover:bg-pink-100 transition">
            <Twitter size={20} />
          </a>
          <a href="#instagram" className="p-2 bg-white rounded-full shadow-md hover:bg-pink-100 transition">
            <Instagram size={20} />
          </a>
          <a href="#youtube" className="p-2 bg-white rounded-full shadow-md hover:bg-pink-100 transition">
            <Youtube size={20} />
          </a>
          <a href="#telegram" className="p-2 bg-white rounded-full shadow-md hover:bg-pink-100 transition">
            <Send size={20} />
          </a>
        </div>
      </div>





      {/* Main Card Section */}
      <div className="">
        <MainCard />
      </div>
      <TeamSection />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Our Recent Project</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
At Shazii Enterprise, we take pride in delivering successful projects across multiple industries. From construction and fashion to event management and marketing, our expertise ensures excellence in every project we undertake. Here are some of our latest achievements:
          </p>
        </div>
        <div
          className="  min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${project})` }}
        ></div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Service  Selection Process</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
At Shazii Enterprise, we ensure a seamless and efficient process for our clients to choose and avail our services. Follow these easy steps to get started:
          </p>
        </div>

        <ImageGrid />
        <AboutUs />
        <WhatWeDo />
        <ClientTestimony />

      </div>

      <Footer />

    </>
  );
}

export default Hero;
