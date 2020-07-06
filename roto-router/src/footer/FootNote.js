import React from 'react';
import './Footer.css';

const FootNote = () => {
    return (
        <div className='foot'>
            <div className="footerText">
                Follow Us:
            </div>
            <div className='icons'>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
            </div>
            <div className='icons'>
                <i className="fa fa-copyright"></i> Copyright 2020 <br />
            </div>
        </div>
    )
}


export default FootNote;