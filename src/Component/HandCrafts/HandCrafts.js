import React from 'react';

import TUFFTILES from '../../Assets/wed 1.png';
import logo from '../../Assets/Evenkog.png';

import Navbar from '../Navbar/Nav';
import Footer from '../ItemCard/footer';
import SubHandCraft from '../../Tv/Component/SubHandCraft/SubHandCraft';

                  
function HandCrafts() {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="h-56">
        <Navbar />
      </div>

      <section className="w-full h-64 bg-[#EDF2EE] rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="flex-1 px-20">
          <img src={TUFFTILES} alt="Tiles" className="w-48 h-64" />
        </div>

        <div className="flex-1 px-4">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="Logo" className="w-16 h-16 rounded-xl" />
            <div>
              <h2 className="text-[#B66C7A] text-2xl font-semibold">
                Handcrafted
              </h2>
              <p className="text-gray-500 text-sm">
                Artistic creations
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 text-center">
          <h3 className="text-[#B66C7A] text-2xl font-semibold mb-2">
            Services
          </h3>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Custom Crafts</li>
            <li>Wood Work</li>
            <li>Handmade Gifts</li>
            <li>Art Pieces</li>
          </ul>
        </div>
      </section>
      <SubHandCraft />
      <Footer />
    </div>
  );
}

export default HandCrafts;
