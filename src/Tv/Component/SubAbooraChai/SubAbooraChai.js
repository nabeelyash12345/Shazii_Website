"use client"

import { useState } from "react"

import companylogo from "../../../Assets/event.png"
import button from "../../../Assets/buutton.png"

export default function SubAbooraChai() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-[#F3F3F3] py-16 px-4">
      <div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Aboora Chai
          </h1>
          <p className="text-gray-600">
            A cup of taste, tradition & togetherness
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-md mx-auto mt-32 mb-16">
          <div className="bg-[#F3F3F3] rounded-3xl p-8 h-[550px] shadow-2xl transition-shadow duration-300">

            {/* Logo */}
            <div className="flex justify-center items-center mb-40 md:mb-0">
              <img
                src={companylogo}
                alt="Aboora Chai Logo"
                className="w-56 h-32 object-center"
              />
            </div>

            {/* Title */}
            <h2 className="text-gray-800 mt-16 font-semibold text-lg mb-6">
              Aboora Chai
            </h2>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm">
                Freshly brewed premium chai
              </p>
              <p className="text-rose-400 text-sm font-medium">
                Loved by 1k+ Customers
              </p>
            </div>

            {/* CTA Button Image */}
            <div className="flex justify-center items-center mb-40 md:mb-0">
              <img
                src={button}
                alt="Order Aboora Chai"
                className="w-full h-32 object-center"
              />
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-12">

          {/* Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              About Aboora Chai
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Aboora Chai is dedicated to serving rich, flavorful tea made
              with high-quality ingredients and authentic recipes.
              <br /><br />
              Every cup is brewed with care, delivering consistency, warmth,
              and satisfaction to our customers.
              <br /><br />
              Our goal is simple — bring people together over a perfect cup
              of chai.
            </p>
          </div>

        </div>

        {/* Contact */}
        <div className="max-w-7xl px-14">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Us
          </h4>
          <p className="text-gray-700 mb-2">
            Orders & Inquiries
          </p>

          <a
            href="https://wa.me/03487015012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 hover:text-green-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487" />
            </svg>

            <span className="font-medium">03487015012</span>
          </a>
        </div>

      </div>
    </div>
  )
}
