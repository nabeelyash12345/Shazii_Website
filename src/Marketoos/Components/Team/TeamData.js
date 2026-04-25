import React from 'react'


import './Team.css'
function TeamData(props) {
    return (
      <div className="Choose">
        <img className='choose_img' alt='img' src={props.imgsrc}></img>
        <h1>{props.title}</h1>
        <p>{props.dec}</p>
      </div>
    );
  }
  export default TeamData;