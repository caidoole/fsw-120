import React from 'react'
import './card-styles.css'

const Card = (props) => {
    let background = " ";
    let priceTag = '';

    if (props.timeToGo === "Spring") {
        background = "url(https://www.farmersalmanac.com/wp-content/uploads/2019/03/When-Is-Spring-Equinox-Solstice-A195068484.jpg)";
    } else if (props.timeToGo === "Summer") {
        background = "url(https://www.smartertravel.com/uploads/2017/08/Beach-Bag-Essentials-Cover-1400x500.jpg)";
    } else if (props.timeToGo === "Fall") {
        background = "url(https://www.thefactsite.com/wp-content/uploads/2019/03/Fall-Leaves.jpg)";
    } else if (props.timeToGo === "Winter") {
        background = "url(https://www.woodstockvt.com/sites/default/files/styles/hero_x_large/public/media-images/snowmobiletrail.jpg?itok=8mrgv-Vw)";
    }

    if (props.price < 500) {
        priceTag = "$"
    } else if (props.price < 1000) {
        priceTag = "$$";
    } else if (props.price > 1000) {
        priceTag = "$$$";
    }

    return (
        <div className='card-item' style={{ backgroundImage: background, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" , opacity: ".8"}}>
            <h3> {props.place}</h3>
            <h4>Price: ${props.price}</h4>
            <p> Best Time of Year to Visit: {props.timeToGo}</p>
            <h1>{priceTag}</h1>
            <button style={{ color: "purple", boxShadow: "3px 4px 10px", margin: "10px", }}>Book NOW!!</button>
        </div>
    )
}
export default Card;
