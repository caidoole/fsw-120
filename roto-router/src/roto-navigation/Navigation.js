import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='menuBar'>
            <Link className='link' to='/'> Home </Link>
            <Link className='link' to='/services'> Services </Link>
            <Link className='link' to='/contactus'>Contact Us</Link>
        </div>
    )
}

export default Navigation