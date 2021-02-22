import React from 'react'

import "./card.css"

const Card = (props) => {
    return (        
    <div className="w-100">
        <img className="card-img-top"  src={props.img} alt=""/>
        
         <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardtext}</p>
            <p className="card-text"><small className="text-muted"> 
            {props.updateTime}</small>
            </p>

        </div>
    </div>
    )
}

export default Card;