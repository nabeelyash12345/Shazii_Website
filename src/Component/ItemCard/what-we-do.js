"use client"

import whatdo1 from "../../Assets/whatdo1.png"
import whatdo2 from "../../Assets/whatdo2.png"
import whatdo3 from "../../Assets/whatdo3.png"

export default function WhatWeDo() {
  const services = [
    {
      icon: whatdo1,
      title: "Event Planning",
      description:
        "Organizing professional and corporate events with seamless planning and execution.",
    },
    {
      icon: whatdo2,
      title: "Construction & Tiles",
      description:
        "Manufacturing and supplying high-quality tiles for residential and commercial projects.",
    },
    {
      icon: whatdo3,
      title: "Marketing",
      description:
        "Offering creative advertising, digital marketing, and brand positioning solutions.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-16 ">
          What We Do
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Circle */}
              <div className="relative mb-8">
                {/* Glow effect */}
             
                {/* Image Container */}
                <div className=" h-52 w-52">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
