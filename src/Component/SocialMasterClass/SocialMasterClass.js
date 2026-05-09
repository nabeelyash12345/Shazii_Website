import React from "react";

import TUFFTILES from '../../Assets/wed 1.png';
import logo from "../../Assets/Evenkog.png";

import Navbar from "../Navbar/Nav";
import Footer from "../ItemCard/footer";
import SubSocialMasterClass from "../../Tv/Component/SubSocialMasterClass/SubSocialMasterClass";

function SocialMasterClass() {
  return (
    <div className="bg-[#F3F3F3]">
      {/* Navbar */}
      <div className="h-56">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="w-full h-64 bg-[#EDF2EE] rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between mx-auto">
        {/* Image */}
        <div className="flex-1 px-20">
          <img
            src={TUFFTILES}
            alt="Social Masterclass"
            className="w-48 h-64"
          />
        </div>

        {/* Title */}
        <div className="flex-1 px-4">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="Logo" className="w-16 h-16 rounded-xl" />
            <div>
              <h2 className="text-[#B66C7A] text-2xl font-semibold">
                Social Masterclass
              </h2>
              <p className="text-gray-500 text-sm">Learn • Connect • Grow</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="flex-1 text-center">
          <h3 className="text-[#B66C7A] text-2xl font-semibold mb-2">
            What You’ll Learn
          </h3>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Personal Branding</li>
            <li>Social Media Strategy</li>
            <li>Content Creation</li>
            <li>Audience Growth</li>
          </ul>
        </div>
      </section>

      {/* Sub Component */}
      <SubSocialMasterClass />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SocialMasterClass;
