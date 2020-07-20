import React, { useState, useEffect } from 'react'
import { withAuth } from '../providers/AuthProviders'


const UserLogIn = ({ handleAuthLogin, getToken, userToken, user }) => {

    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        getToken();
    }, [getToken])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAuthLogin(userName)
        getToken()
        formCleanup()
    }

    const formCleanup = () => {
        setuserName('')
        setPassword('')
    }

    return (
        <div>
            {userToken
                ?
                <div className='signedIn'>
                    <div>
                        <p className='loginWelcome'>Welcome, {user}</p>
                    </div>
                </div>
                :
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='UserName'
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                    />
                    <br />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required minLength='4'
                    />
                    <br />

                    <button className='loginButton'>Sign In</button>
                </form>
            }
        </div>
    )
}

export default withAuth(UserLogIn)

