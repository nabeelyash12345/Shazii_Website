"use client"

import { useState } from "react"

import companylogo from "../../../Assets/event.png"
import button from "../../../Assets/buutton.png"

export default function SubSocialMasterClass() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-[#F3F3F3] py-16 px-4">
      <div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Social MasterClass
          </h1>
          <p className="text-gray-600">
            Learn, build and grow with industry experts
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-md mx-auto mt-32 mb-16">
          <div className="bg-[#F3F3F3] rounded-3xl p-8 h-[550px] shadow-2xl transition-shadow duration-300">

            {/* Logo */}
            <div className="flex justify-center items-center mb-40 md:mb-0">
              <img
                src={companylogo}
                alt="MasterClass Logo"
                className="w-56 h-32 object-center"
              />
            </div>

            {/* Title */}
            <h2 className="text-gray-800 mt-16 font-semibold text-lg mb-6">
              Social MasterClass
            </h2>

            {/* Stats */}
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm">
                Expert-led live sessions
              </p>
              <p className="text-rose-400 text-sm font-medium">
                2k+ Students Enrolled
              </p>
            </div>

            {/* CTA Button Image */}
            <div className="flex justify-center items-center mb-40 md:mb-0">
              <img
                src={button}
                alt="Join MasterClass"
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
              About This MasterClass
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Social MasterClass is designed to help students, creators, and
              entrepreneurs master digital skills, branding, and growth
              strategies.
              <br /><br />
              The program includes live sessions, real-world case studies,
              hands-on projects, and mentorship from professionals.
              <br /><br />
              Participants gain confidence, practical knowledge, and community
              support to succeed in the digital world.
            </p>
          </div>

        </div>

        {/* Managing Director */}
        <div className="max-w-7xl px-14">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Program Coordinator
          </h4>
          <p className="text-gray-700 mb-2">
            Contact Number
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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>

            <span className="font-medium">03487015012</span>
          </a>
        </div>

      </div>
    </div>
  )
}
