import React from 'react'

const DisplayChirps = ({ index, userName, statusUpdate, hashtags, image, handleDelete, handleEdit, isOwner, readOnly,
    handleStatusEdit, handleHashTagEdit }) => {
    return (
        <div className='chirpInputs'>
            {isOwner
                ?
                <div id="ownerChirps">
                    {readOnly
                        ?
                        <div>
                            <img className='icon' alt='avatar' src={image} /> <p className='userName'> {userName}</p>
                            <p className='codedupdates'>{statusUpdate}</p>
                            <p className='hashtags'>{hashtags}</p>
                            <div>
                                <button className='removeButton' onClick={() => handleDelete(index)}>X</button>
                                <button className='editButton'><i className="fa fa-edit" onClick={() => handleEdit(index)}></i> </button>
                            </div>
                        </div>
                        :
                        <div>
                            <img className='icon' alt='avatar' src={image} /> <p className='userName'> {userName}</p>
                            <input className='updatedPost'
                                type='text'
                                value={statusUpdate}
                                onChange={(e) => handleStatusEdit(index, e.target.value)}
                            />
                            <br />
                            <input className='updatedHashtags'
                                type='text'
                                value={hashtags}
                                onChange={(e) => handleHashTagEdit(index, e.target.value)}
                            />
                            <div>
                                <button className='editButton'><i className="fa fa-edit" onClick={() => handleEdit(index)}></i> </button>
                            </div>
                        </div>
                    }
                </div>
                :
                <div id="hardCodedChirps">
                    <img className='icon' alt='avatar' src={image} /> <p className='userName'> {userName}</p>
                    <p className='codedupdates'>{statusUpdate}</p>
                    <p className='hashtags'>{hashtags}</p>
                </div>
            }
        </div>
    )
}

export default DisplayChirps