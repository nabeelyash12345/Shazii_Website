"use client"



import { useState } from "react"
import { Send } from "lucide-react"

import companylogo  from "../../../Assets/FashionHands .png";
import button  from "../../../Assets/buutton.png";


export default function Fashionmain() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen  bg-[#F3F3F3] py-16 px-4">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fashion Hands </h1>
          <p className="text-gray-600">Fashion is your Right.</p>
        </div>

        {/* Main Card with Glow */}
        <div className="max-w-md mx-auto mt-32 mb-16">
          <div className="bg-[#F3F3F3] rounded-3xl p-8 h-[550px] shadow-2xl  transition-shadow duration-300">
            {/* Logo */}
        
<div className="flex flex-1  justify-center items-center mb-40 md:mb-0">
  <img
    src={companylogo}
    alt="Tiles background"
    className="w-56 h-32 object-center "
  />
</div>

            {/* Title */}
            <h2 className=" text-gray-800 mt-16 font-semibold text-lg mb-6">Fashion Hands </h2>

            {/* Stats */}
            <div className=" space-y-2 mb-6">
              <p className="text-gray-600 text-sm">3+ years of experience</p>
              <p className="text-rose-400 text-sm font-medium">25k+ Projects Done</p>
            </div>

            {/* Contact Form */}
          <div className="flex flex-1  justify-center items-center mb-40 md:mb-0">
  <img
    src={button}
    alt="Tiles background"
    className="w-full h-32 object-center "
  />
</div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Our Services Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services information</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">

At Shazii Enterprise, we offer a wide range of high-quality services across multiple industries, ensuring excellence and customer satisfaction in every project.

</p>
          
          </div>

          {/* Our Services and Product */}
          
      
        </div>
            <div className=" max-w-7xl px-14">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Managing Director</h4>
          <p className="text-gray-700 mb-2">contact Number</p>
          <a
            href="https://wa.me/03402546883"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 hover:text-green-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="font-medium">03418963758</span>
          </a>
        </div>

        {/* Managing Director */}
        
      </div>
    </div>
  )
}
