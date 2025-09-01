import React from 'react';

import "./itemCard.css"

const Card = ({ cardData, onCardClick }) => {
  return (
    <div className="Comment" onClick={() => onCardClick(cardData)}>
      <img className='card_img' src={cardData.image} alt={cardData.title} />
      <h1>{cardData.title}</h1>
      <p>{cardData.description}</p>
    </div>
  );
};

export default Card;
