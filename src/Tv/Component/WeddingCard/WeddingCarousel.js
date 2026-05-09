import { useState, useEffect } from "react";

const cards = [
  {
    title: "Pre-wedding photoshoot",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    img: require("../../../Assets/chairsetting.png"),
  },
  {
    title: "Wedding",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    title: "Pre-wedding photoshoot",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    img: require("../../../Assets/chairsetting.png"),
  },
  {
    title: "Wedding",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    img: require("../../../Assets/wed 1.png"),
  },
  {
    title: "Pre-wedding photoshoot",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    img: require("../../../Assets/5.png"),
  },
  {
    title: "Wedding",
    desc: "Gate flowers are used as decorative pieces for enhancing the beauty of entrance gates and pillars.",
    img: require("../../../Assets/chairsetting.png"),
  },
];

export default function WeddingCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 flex-nowrap px-4 py-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="min-w-[200px] max-w-[200px] rounded-3xl bg-white shadow-xl p-2 flex-shrink-0"
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={card.img}
                alt="card"
                className="w-full h-[180px] object-cover"
              />
            </div>

            {/* Bottom */}
            <div className="bg-black rounded-2xl mt-[-20px] p-3 pt-4 text-center">
              <p className="text-[10px] text-gray-300 mb-2 leading-snug">
                {card.desc}
              </p>

              <div className="flex items-center justify-between bg-gray-200 rounded-full px-3 py-1.5">
                <span className="text-[10px] text-gray-700">{card.title}</span>
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-300 text-xs">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
