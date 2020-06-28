import React from 'react'
import './DisplayCard.css'

const InfoDisplayCard = ({ index, firstName, lastName, age, handleDelete }) => {
    return (
        <div className='card-display'>
            <ol>
                <li> Name: {firstName} {lastName}</li>
                <li> Age: {age}</li>
            </ol>
            <br />
            <button className='remove-butt' onClick={() => handleDelete(index)}>Remove!</button>
        </div>
    );
}
export default InfoDisplayCard