import React from 'react';


import CloseIcon from '@mui/icons-material/Close';

import "./itemCard.css"


const Popup = ({ cardData, onClose }) => {
  return (
   
          <div className="popup">
            <div className="popup-content">
              <img src={cardData.image} alt={cardData.title}  />
              <h2>{cardData.title}</h2>
              <p>{cardData.description}</p>
              <div className='priceCard__container'>
                  <div className='priceCard'>
                      <h3>{cardData.priceTitle1}</h3>
                    
                  </div>
                  <div className='priceCard'>
                      <h3>{cardData.priceTitle2}</h3>
                      <p>{cardData.priceDesc2}</p>
                      <button>{cardData.priceButton2}</button>
                  </div>
                  <div className='priceCard'>
                      <h3>{cardData.priceTitle3}</h3>
                      <p>{cardData.priceDesc3}</p>
                      <button>{cardData.priceButton3}</button>
                  </div>
              </div>
              <button className='closeButtom' onClick={onClose}>
                <CloseIcon  className='closeIcon'/>
              </button>
            </div>
          </div>
      
  );
};

export default Popup;
