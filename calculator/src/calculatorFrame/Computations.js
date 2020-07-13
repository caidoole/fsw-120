import React from 'react'
import './Calculator.css'

const Computations = (props) => {
    return (
        <div className='result'>
            {props.currentResult}
        </div>
    )
}

export default Computations;