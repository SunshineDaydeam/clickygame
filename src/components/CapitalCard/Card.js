import React from 'react';
import './Card.css'

const Card = props => (
  <div className = "col-3 col-sm-2 border border-dark p-0" onClick = {() => props.clickCount(props.id)}>
    <div className="bg-light text-center h-100">
      <div className="img-container">
        <img className="card-img-top" src={props.imageURL} alt={props.name} id={props.id}/>
        
      </div>
      <p className = "mb-0"><small>{props.name}</small></p>
    </div>
  </div>
)

export default Card;