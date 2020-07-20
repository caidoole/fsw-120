import React, { useEffect } from 'react'
import './QuestStyle.css'
import { withAuth } from '../providers/AuthProviders'

const Quests = ({ userToken, getToken }) => {
    useEffect(() => {
        getToken()
    }, [getToken]);

    return (
        <div>
            {userToken ?
                <div>
                    <h1>Only Rule - Pics or it didn't happen</h1>
                    <div className='questCards'>
                        <h3> Capture The Knight  </h3>
                        <img src='https://www.ancient-origins.net/sites/default/files/field/image/Black-Knights-in-Medieval-Legends.jpg' alt='knight' />
                        <p> Find a knight and hold them 'captive' for 5 minutes <button>Joyn</button></p>
                    </div>
                    <div className='questCards'>
                        <h3>Save the Fae Bae</h3>
                        <img src='https://i.pinimg.com/originals/62/8e/fd/628efdf8ca7133e4f71713e6c3726aac.jpg' alt='fae' />
                        <p>Save the Fae from a bad data in the most theatrical way possible <button>Joyn</button></p>
                    </div>
                    <div className='questCards'>
                        <h3>Scale the Mountain Top Trees</h3>
                        <img src='https://media-cdn.tripadvisor.com/media/photo-s/05/34/9e/92/trees-of-mystery.jpg' alt='trees' />
                        <p>Scale the tallest tree in your realm, share the view and challenge your friends <button>Joyn</button></p>
                    </div>
                    <div className='questCards'>
                        <h3>Fight the Blight facing the Mer-Folk</h3>
                        <img src='https://elements-video-cover-images-0.imgix.net/files/195384061/Sea+Water+Pollution++Preview.jpg?auto=compress%2Cformat&fit=min&h=338&w=600&s=9a10230470f5bf36170d96fa4f1a22b5' alt='mer' />
                        <p>Donate to help fight the pollution problem that is harming mer-folk<button>Joyn</button></p>
                    </div>
                    <div className='questCards'>
                        <h3>Hercules Challenges</h3>
                        <img src='https://i.pinimg.com/originals/fb/9d/08/fb9d08ba62cd50c4b23ffc34bd46a1c1.png' alt='herc' />
                        <p>The most intenst workout of your life, complete it and be entered into the Achilles Trathlon - video submissions only <button>Joyn</button></p>
                    </div>
                </div>
                :
                <div className='questLoginReminder'>
                    <h1>Please log into Chirp!</h1>
                    <img src='https://c4.wallpaperflare.com/wallpaper/298/737/244/artwork-digital-art-anthro-birds-wallpaper-preview.jpg' alt='owls' />

                </div>
            }
        </div>
    )
}
export default withAuth(Quests)