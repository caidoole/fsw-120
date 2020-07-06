import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="homeCards">

            <div className="homeCard">
                <div className="homeCardMission">
                    Our Mission:
                </div>
                <div className="homeCardContent">
                    <p> To offer the widest selection of services at prices you can afford.</p>
                </div>
            </div>

            <div className='homeDisplay'>
                <div className='cardDisplays'>
                    Displays:
            </div>
                <div className='displayContent'>
                    <p> Whether your pipe dreams are indoors or outside we offer the most unique, eye catching and functional pieces of plumbing art there is!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;