import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DisplayChirps from './DisplayChirps'
import './ChirpStyle.css'
import hardCodedChirps from './HardCodeChirps.json'
import { withAuth } from '../providers/AuthProviders'

const Chirps = ({ userToken, getToken, user }) => {
    const [statusUpdate, setStatusUpdate] = useState('')
    const [hashtags, setHashtags] = useState('')
    const [chirps, setChirps] = useState([]);

    useEffect(() => {
        getToken()
        setChirps(hardCodedChirps);
    }, [getToken]);

    const handleSubmit = (e) => {
        e.preventDefault()
        let chirp = {
            _id: uuidv4(),
            userName: user,
            statusUpdate: statusUpdate,
            hashtags: hashtags,
            readOnly: true,
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35bb9853-ad2c-4aae-8024-aaa6244d56a8/d83qthr-252c6ade-888b-49ca-8d77-dd8939c045b8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzViYjk4NTMtYWQyYy00YWFlLTgwMjQtYWFhNjI0NGQ1NmE4XC9kODNxdGhyLTI1MmM2YWRlLTg4OGItNDljYS04ZDc3LWRkODkzOWMwNDViOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.exUUhFyVKRBgWgt388wP6G47zQomX-tcITDfWdpW44Y"
        }
        setChirps([chirp, ...chirps])
        formCleanUp()
    }
    const formCleanUp = () => {
        setStatusUpdate('')
        setHashtags('')
    }

    const handleDelete = (index) => {
        let newChirpArray = [...chirps];
        newChirpArray.splice(index, 1)
        setChirps(newChirpArray)
    }

    const handleEdit = (index) => {
        let editChirpArray = [...chirps];
        editChirpArray[index] = { ...editChirpArray[index], readOnly: !editChirpArray[index].readOnly }
        setChirps(editChirpArray)
    }

    const handleStatusEdit = (index, newValue) => {
        let editChirpArray = [...chirps];
        editChirpArray[index] = { ...editChirpArray[index], statusUpdate: newValue }
        setChirps(editChirpArray)
    }

    const handleHashTagEdit = (index, newValue) => {
        let editChirpArray = [...chirps];
        editChirpArray[index] = { ...editChirpArray[index], hashtags: newValue }
        setChirps(editChirpArray)
    }

    const chirpsData = chirps.map((chirp, i) => {
        let isOwner = false;
        if (chirp.userName === user) {
            isOwner = true;
        }
        return (
            <DisplayChirps
                key={i}
                index={i}
                _id={chirp._id}
                userName={chirp.userName}
                statusUpdate={chirp.statusUpdate}
                hashtags={chirp.hashtags}
                image={chirp.image}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                readOnly={chirp.readOnly}
                handleStatusEdit={handleStatusEdit}
                handleHashTagEdit={handleHashTagEdit}
                isOwner={isOwner}
            />
        )
    })
    return (
        <div>
            {userToken
                ?
                <div>
                    <div>
                        <form className='formInput' onSubmit={handleSubmit}>
                            <input className='originalPost'
                                type='text'
                                placeholder='Quest Updates'
                                value={statusUpdate}
                                onChange={(e) => setStatusUpdate(e.target.value)}
                                required
                            />
                            <br />
                            <input className='originalHashtag'
                                type='text'
                                placeholder='Hashtags'
                                value={hashtags}
                                onChange={(e) => setHashtags(e.target.value)}   
                            />
                            <br />
                            <button>Post</button>
                        </form>

                    </div>
                    {chirpsData}
                </div>
                :
                <div className='loginReminder'>
                    <h1>Please log into Chirp!</h1>
                    <img src='https://c4.wallpaperflare.com/wallpaper/298/737/244/artwork-digital-art-anthro-birds-wallpaper-preview.jpg' alt='owls' />
                    </div>
            }
        </div>
    )
}
export default withAuth(Chirps)