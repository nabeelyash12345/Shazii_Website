import React from 'react'
import './Service.css'
function Service(props) {
    return (
      <div className="Comment">
        <img className='card_img' alt='img' src={props.imgsrc}></img>
        <h1>{props.title}</h1>
        <p>{props.dec}</p>
        <button className='btn_tv'>{props.btn}</button>
      </div>
    );
  }
  export default Service