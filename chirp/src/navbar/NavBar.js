import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './NavStyle.css'
import { withAuth } from '../providers/AuthProviders'

const NavBar = ({ handleUserLogout, getToken, userToken }) => {

    useEffect(() => {
        getToken();
    }, [getToken])

    return (
        <div className='menuBar'>
            <Link className='link' to='./'>Home</Link>
            <Link className='link' to='./chirps'>Chirps</Link>
            <Link className='link' to='./quests'>Quests</Link>
            {userToken
                ?
                <Link className='link' to='./' onClick={handleUserLogout}>Logout</Link>
                :
                <></>
            }

        </div>
    )
}

export default withAuth(NavBar);


// Buttons for all the pages