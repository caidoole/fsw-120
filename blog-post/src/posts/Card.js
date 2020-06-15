import React from "react"
import './card-style.css'

const Card = (props) => {
    return (
        <div className='card-item' id='card-item'>
            <div className='headlines'>
                <h2 style={{ fontSize: 40, margin: 0 }}>{props.title}</h2>
                <h3 style={{ margin: 0, paddingTop: 5 }}>{props.subTitle}</h3>
            </div>
            <p>Posted by <a href="#card-item">{props.author}</a>  on {props.date}</p>
        </div>
    )
}
export default Card;