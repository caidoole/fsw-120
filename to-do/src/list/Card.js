import React from 'react';

import './card-style.css'

const Card = (props) => {
    return (
        <div className='card-item'>
            <div className='item-title'>
                <input type="checkbox"></input>
                <h1 style={{margin: 0}}>{props.title}</h1>
            </div>
            <div>
                <p style={{margin: 0}}>{props.description}</p>
            </div>
        </div>
    )
}


export default Card;
