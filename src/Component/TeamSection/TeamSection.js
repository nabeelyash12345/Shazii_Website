import circleImg from "../../Assets/circle.png";
import firstImage from "../../Assets/sajjed.png";
import secondImage from "../../Assets/Rashid.png";
import thirdImage from "../../Assets/ss.png";

const members = [
  {
    name: "Arslan Hussain",
    role: "HR Manager",
    img: firstImage,
  },    
  {
    name: "Sherzad Hussain",
    role: "CEO MangDev",
    img: secondImage,
    large: true,
  },
  {
    name: "Sajjad Hussain",
    role: "Finance Manager",
    img: thirdImage,
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#eef3f7] flex justify-center items-center py-20 overflow-hidden">

      {/* 🔵 TOP LEFT CIRCLE */}
      <img
        src={circleImg}
        alt="circle"
        className="absolute top-[60px] left-[80px] w-[180px] opacity-80"
      />

      {/* 🔵 BOTTOM RIGHT CIRCLE */}
      <img
        src={circleImg}
        alt="circle"
        className="absolute bottom-[50px] right-[50px] w-[180px] opacity-80"
      />

      {/* Cards Container */}
      <div className="flex justify-around items-center w-full max-w-5xl">

        {members.map((member, i) => (
          <Card key={i} member={member} />
        ))}

      </div>
    </section>
  );
}


function Card({ member }) {
  const isLarge = member.large;

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden shadow-lg bg-gray-300
        transition hover:scale-105
        ${isLarge ? "w-[320px] h-[260px]" : "w-[220px] h-[180px]"}
      `}
    >
      {/* Image */}
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover"
      />

      {/* Label */}
      <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow text-xs">
        <p className="font-semibold text-gray-800 leading-none">
          {member.name}
        </p>
        <span className="text-[10px] text-gray-500">
          {member.role}
        </span>
      </div>
    </div>
  );
}