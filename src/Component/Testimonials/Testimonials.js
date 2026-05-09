import React from 'react';
import firstimage from "../../Assets/sajjed.png";
import secondimage from "../../Assets/Rashid.png";
import thirdimage from "../../Assets/ss.png"; 

const testimonials = [
  { 
    name: "Haider ABBAS", 
    review: "Thank you for your service.I am very pleased with the result. I have seen exceptional growth in my business and it's all thanks to your amazing service",
    img: firstimage
  },
  { 
    name: "Karim Uddin", 
    review: "Thank you for your service.I am very pleased with the result. I have seen exceptional growth in my business and it's all thanks to your amazing service",
    img: secondimage,
    isCenter: true 
  },
  { 
    name: "Yawar ABBAS", 
    review: "Thank you for your service.I am very pleased with the result. I have seen exceptional growth in my business and it's all thanks to your amazing service",
    img: thirdimage 
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3 justify-center">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-[#FFEB3B] text-xl">★</span>
    ))}
  </div>
);

export default function TestimonialSection() {
  return (
    <section className="bg-[#F3F3F3] min-h-screen flex items-center justify-center p-10 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`bg-[#F1F1F1] rounded-[2rem] shadow-2xl relative flex flex-col items-center text-center p-8 transition-all duration-300
              ${t.isCenter 
                ? "w-[340px] py-14 z-10 -translate-y-12" // Center card moved UP
                : "w-[300px] py-10 translate-y-8"      // Side cards moved DOWN
              }`}
          >
            {/* Avatar Circle - Positioned exactly half-way off the top border */}
            <div className="absolute -top-10 w-20 h-20 rounded-full border-[5px] border-[#F3F3F3] overflow-hidden shadow-md">
              <img 
                src={t.img} 
                alt={t.name} 
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Content Area */}
            <div className="mt-4">
              <Stars />
              <h3 className="text-[#4D4D4D] font-bold text-2xl mb-4 tracking-tight">
                {t.name}
              </h3>
              <p className="text-[#666666] text-[13px] font-medium leading-relaxed px-2">
                {t.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}