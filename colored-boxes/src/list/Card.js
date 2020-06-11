import React from 'react'
import './card-style.css'

const Card = (props) => {
    return (
        <div className='card-item' style= {{backgroundColor:props.background}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <h5>{props.information}</h5>
            
        </div>
    )
}

export default Card;