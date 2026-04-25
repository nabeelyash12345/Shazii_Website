"use client"

import { Star } from "lucide-react"
import Rectangle from '../../Assets/Rectangle 178.png'
import Rectangle1 from '../../Assets/Rectangle 184.png'





const testimonials = [
  {
    id: 1,
    name: "Amjad ali",
    title: "Founder, CEO",
    company: "Company",
    rating: 5,
    testimonial:
      "Shazi Enterprise has exceeded my expectations with their exceptional services. From event management to fashion design, every project is handled with professionalism, creativity, and attention to detail. Their team is highly skilled, ensuring a seamless experience and outstanding results. I highly recommend them to anyone looking for top-quality services across multiple industries!",
    image:Rectangle,
  },
  {
    id: 2,
    name: "Jonathan Seth",
    title: "Founder, CEO",
    company: "Company",
    rating: 5,
    testimonial:
      "Shazi Enterprise has exceeded my expectations with their exceptional services. From event management to fashion design, every project is handled with professionalism, creativity, and attention to detail. Their team is highly skilled, ensuring a seamless experience and outstanding results. I highly recommend them to anyone looking for top-quality services across multiple industries!",
    image: Rectangle1,
  },
]

export default function ClientTestimony() {
  return (
  <section className="py-16 px-4 ">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center lg:text-left">
      Client Testimony
    </h2>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={` rounded-3xl p-8  ${
            index === 1 ? "lg:mt-16" : ""
          }`}
        >
          {/* Client Image */}
          <div className="mb-6">
            <div className="w-full  shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-full h-96 object-fill object-top"
              />
               <div className="mb-4">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-1">{testimonial.name}</h3>
            <p className="text-sm  text-center text-gray-600 mb-3">
              {testimonial.title}, {testimonial.company}
            </p>

            {/* Star Rating */}
           <div className="flex gap-1 items-center justify-center">
  {Array.from({ length: testimonial.rating }).map((_, i) => (
    <Star
      key={i}
      className="w-4 h-4 text-yellow-400 inline-flex"
      fill="currentColor"
      stroke="currentColor"
    />
  ))}
</div>

          </div>
            </div>
            
          </div>

          {/* Client Info */}
         

          {/* Testimonial Text */}
          <p className="text-gray-700 leading-relaxed text-sm">{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
