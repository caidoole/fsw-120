import React from 'react'

const CallBackCard = ({ name, phone, email, callTimeAm, callTimePm, request }) => {

    let callTime = '';

    if (callTimeAm && callTimePm) {
        callTime = 'Call any time'
    } else if (callTimeAm && !callTimePm) {
        callTime = 'Call mornings'
    } else if (callTimePm && !callTimeAm) {
        callTime = 'Call evenings'
    } else {
        callTime = 'Please email'
    }

    return (
        <div>
            <h3>Please Contact:</h3>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Best time to Call:  {callTime}</p>
            <p>For:</p>
            <textarea disabled value={request}></textarea>
            <br />
        </div>
    )
}
export default CallBackCard