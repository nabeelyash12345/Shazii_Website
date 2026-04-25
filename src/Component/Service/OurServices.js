import React from "react";
import our1 from '../../Assets/our1.png'
import our2 from '../../Assets/our2.png'
import our3 from '../../Assets/our3.png'
import our4 from '../../Assets/our4.png'
import our5 from '../../Assets/our5.png'
import our6 from '../../Assets/our6.png'
import ourb from '../../Assets/buttonm.png'




const DATA = [
  {
    id: "1",
    title: "Tufftiles",
    desc: "Tuff tile is a durable, interlocking concrete laying tile used for outdoor flooring like driveways, walkways, and patios.",
    image: our1,
  },
  {
    id: "2",
    title: "Flower Posts",
    desc: "Flower posts are decorative stands used to enhance floral arrangements and add elegance to event spaces.",
    image: our2
  },
  {
    id: "3",
    title: "Gate Flower",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    image: our3
  },
  {
    id: "4",
    title: "Home Design",
    desc: "A home design is the creative and functional planning of a living space to reflect personal style.",
    image: our4,
  },
  {
    id: "5",
    title: "Face Stone",
    desc: "Blocks are solid construction units, typically made of concrete or stone.",
    image: our5
  },
  {
    id: "6",
    title: "Blocks",
    desc: "Face stone is a decorative building material used on walls and facades.",
    image: our6,
  },
];

export default function OurServices() {
  return (
    <div className="p-6 bg-[#F3F3F3] mt-14 mb-14 min-h-screen">
      <h1 className="text-xl font-semibold mb-5">
        Our Services Information
      </h1>

      {/* 3 COLUMN GRID */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
  {DATA.map((item) => (
    <div
      key={item.id}
      className="bg-white w-full rounded-2xl p-3 "
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-72 object-cover rounded-xl mb-3"
      />

      <h2 className="text-sm font-semibold mb-1 text-center">{item.title}</h2>

      <p className="text-xs text-gray-500 mb-3  text-center px-5 line-clamp-3">
        {item.desc}
      </p>
<div className="flex justify-center w-full">

      <button className="relative  w-60 bg-[#F9F9F9]  h-12    overflow-hidden rounded-full px-3 py-2 text-xs font-medium">

  {/* Full overlay image */}
  <img
    src={ourb}
    alt="bg"
    className="absolute inset-0  w-96  h-full rounded-full  object-cover"
  />

  {/* Dark overlay (optional for readability) */}


  {/* Text on top */}
  <span className="relative text-black  flex justify-between w-full">
    {item.title}
   
  </span>

</button>
</div>
    </div>
  ))}
</div>
    </div>
  );
}