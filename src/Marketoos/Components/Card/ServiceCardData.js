import React from 'react'


import './Card.css'
function CardData(props) {
    return (
      <div className="Comment">
        <img className='card_img' alt='img' src={props.imgsrc}></img>
        <h1>{props.title}</h1>
        <p>{props.dec}</p>
      </div>
    );
  }
  export default CardData