// ImageGrid.jsx
import React from 'react';
import image1 from '../../Assets/1.png';
import image2 from '../../Assets/2.png';
import image3 from '../../Assets/3.png';
import image4 from '../../Assets/4.png';

const images = [image1, image2, image3, image4];

export default function ImageGrid() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-">
        {images.map((img, index) => (
 <img
  key={index}
  src={img}
  alt={`Image ${index + 1}`}
  className="w-full h-auto  object-contain "
/>


        ))}
      </div>
    </div>
  );
}
