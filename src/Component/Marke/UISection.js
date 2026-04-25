import React from "react";
import logo from "../../Assets/ss.png";
import logo2 from "../../Assets/Rashid.png";
import logo3 from "../../Assets/sajjed.png";
import logo4 from "../../Assets/ar.png";





const features = [
  {
    title: "High Quality work",
    desc: "High standards in every service we provide.",
    icon: "🏆",
  },
  {
    title: "Quality Assurance",
    desc: "High standards in every service we provide.",
    icon: "🤝",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Personalized solutions tailored to your needs.",
    icon: "🎯",
  },
  {
    title: "Professional Team",
    desc: "Experienced professionals committed to excellence.",
    icon: "👥",
  },
];

const team = [
  {
    name: "Sherzad Hussain",
    role: "CEO",
    desc: "A Managing Director (MD) oversees the overall operations and strategic direction of a company and ensures company goals are met.",
    img: logo,
  },
  {
    name: "Rashid Hussain",
    role: "Marketing Manager",
    desc: "Leads a team of sales, marketing, and professionals to achieve targets and deliver excellence across industries.",
  img: logo2,
  },
  {
    name: "Sajjed Hussain",
    role: "Finance Manager",
    desc: "Manages financial health, budgets, and compliance with regulations while improving company strategies.",
   img: logo3,
  },
  {
    name: "Arslan Hussain",
    role: "HR Manager",
    desc: "Oversees recruitment, training, and employee relations while developing company policies.",
   img: logo4,
  },
];

const UISection = () => {
  return (
    <div className="bg-[#ffff] px-6 md:px-16 py-12">
      
      {/* ================= Why Choose Us ================= */}
      <h2 className="text-2xl font-semibold mb-8">Why Choose Us?</h2>

      <div className="space-y-6">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            
            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full text-xl">
              {item.icon}
            </div>

            <h3 className="text-gray-800">
              <span className="font-semibold">{item.title}</span>
              <span className="text-gray-500 font-normal">
                {" "}– {item.desc}
              </span>
            </h3>

          </div>
        ))}
      </div>

      {/* ================= Our Team ================= */}
      <h2 className="text-2xl font-semibold mt-16 mb-8">Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md relative hover:shadow-lg transition"
          >
            
            {/* Avatar */}
            <div className="absolute -top-6 left-6 flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full shadow">
              <img
                src={member.img}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-10 leading-6">
              {member.desc}
            </p>

          </div>
        ))}
      </div>

      {/* ================= Location ================= */}
      <h2 className="text-2xl font-semibold mt-16 mb-6">
        Where Are We Located?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <p className="text-gray-600 leading-6">
          Shazi Enterprise Headquarters located in the heart of Gilgit, we are
          easily accessible for all your business needs. Whether you need
          construction materials, marketing solutions, event planning, or
          fashion services, our team is ready to assist you.
        </p>

        {/* Google Map */}
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Gilgit%20Pakistan&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
};

export default UISection;