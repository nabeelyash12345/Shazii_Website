import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img from '../../Assets/2.png';
import img2 from '../../Assets/3.png';

import './Feedback.css';

function Feedback() {
  // Define a CSS class for responsive images
  const responsiveImageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div>
      <Carousel>
        <div>
          <img className='slide1' src={img} alt="Image 1" style={responsiveImageStyle} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="Image 2" style={responsiveImageStyle} />
          <p className="legend">Legend 2</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
}

export default Feedback;
