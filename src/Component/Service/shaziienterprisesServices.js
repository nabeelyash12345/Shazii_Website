import React from "react";
import Navbar from "../Navbar/Nav";
import Footer from "../ItemCard/footer";

// Images
import TUFFTILES from "../../Assets/TUFFTILES 2.png";
import logo from "../../Assets/Home.png";
import MainCard from "../ItemCard/ItemCard";

function ShaziienterprisesServices() {
  return (
    <div className="bg-[#F3F3F3]">

      <div className="h-56">
        <Navbar />
      </div>

      <div className="w-full">

      {/* TOP SECTION */}
      <div className="bg-[#d86a67] text-black px-6 py-6 flex flex-col md:flex-row justify-between items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <div className="w-10 h-6 bg-white rounded-sm"></div>
            <span className="text-xs">SHAZI ENTERPRISES</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold">
            shazi enterprises
          </h1>

          <p className="text-sm mt-1">
            our business is to bring a smile on your face
          </p>
        </div>

        {/* CENTER - PROJECTS */}
        <div className="text-center mt-4 md:mt-0">
          <h2 className="font-semibold mb-1">Projects</h2>
          <div className="text-xs leading-4">
            <p>Jewellers</p>
            <p>Eventbridge</p>
            <p>Makeup.pk</p>
            <p>Cleanpro</p>
            <p>Stylistico</p>
            <p>Fruter G8</p>
            <p>Drazistan</p>
            <p>Abayas Mall</p>
            <p>Digital Chawk</p>
            <p>Fashion Hands</p>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-xs">
          <p>FB shazi enterprises</p>
          <p>Gmail</p>
          <p>shazienterprises@gmail.com</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#2b1b1b] text-white text-[10px] text-center py-2">
        MD Shahzad Hussain 03402364683 / HR Ahsan Hussain 03180872168 , 03109436724
      </div>

    </div>
       <div className="">
              <MainCard />
            </div>

      <Footer />
    </div>
  );
}

export default ShaziienterprisesServices;