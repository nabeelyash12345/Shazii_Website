import React from "react";

import logo from "../../Assets/tuf-tile.png";
const JonSonsTiles = () => {
  return (
    <div className="flex min-h-screen">
      
      {/* Left Section */}
      <div className="w-1/2 bg-[#c98f8c] text-white p-10 overflow-y-auto">
        
        {/* Badge */}
        <div className="inline-block bg-[#e7c1be] px-4 py-2 rounded-full font-semibold mb-6">
          Jon&sons Tiles
        </div>

        {/* Description */}
        <p className="text-sm leading-6 opacity-95">
          Jon & Sons Tiles is a trusted name in premium tile solutions, offering
          a wide variety of designs for residential and commercial spaces.
          <br /><br />
          We specialize in high-quality ceramic, porcelain, and marble tiles
          sourced from top global manufacturers.
          <br /><br />
          Our tiles are known for their durability, aesthetic appeal, and
          long-lasting finish.
          <br /><br />
          Whether you're renovating a home or outfitting a large project, we
          have the right options for every style.
          <br /><br />
          Our team offers expert guidance to help you choose the perfect design
          for walls, floors, kitchens, and bathrooms.
          <br /><br />
          We ensure competitive pricing with no compromise on product quality
          and customer satisfaction.
          <br /><br />
          Located in Husain Chowk, Danyore, Gilgit, we proudly serve clients
          across the region.
          <br /><br />
          At Jon & Sons Tiles, we bring beauty and strength to every surface.
        </p>

        {/* Title */}
        <h2 className="mt-8 text-3xl font-bold text-black">
          Our Story
        </h2>

        {/* Story */}
        <p className="text-sm leading-6 mt-4 opacity-95">
          Jon & Sons Tiles began with a passion for quality craftsmanship and
          stylish living spaces.
          <br /><br />
          Founded in Gilgit, we’ve grown through dedication to excellence and
          customer trust.
          <br /><br />
          Our mission is to transform every space with tiles that blend beauty,
          strength, and value.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img
          src={logo} // replace with your image
          alt="Tiles"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default JonSonsTiles;