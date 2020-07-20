import React, { useEffect } from 'react'
import './HomeStyle.css'
import UserLogIn from './UserLogIn'
import { withAuth } from '../providers/AuthProviders'


const Home = ({ getToken }) => {
    useEffect(() => {
        getToken();
    }, [getToken])

    return (
        <div >
            <div className='userForm'>
                <div> <UserLogIn /> </div>
            </div>
            <div className='homeImage'>
                <img src='https://c4.wallpaperflare.com/wallpaper/298/737/244/artwork-digital-art-anthro-birds-wallpaper-preview.jpg' alt='owls' />
            </div>
        </div>
    );
}

export default withAuth(Home)