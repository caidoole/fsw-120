import React, { useState } from 'react';
import CallBackCard from './CallBackCard';
import './ContactUs.css'

const ContactUs = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [callTimeAm, setCallTimeAm] = useState(false);
    const [callTimePm, setCallTimePm] = useState(false);
    const [request, setRequest] = useState('')
    const [userCards, setAllUserCards] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        let userCard = {
            name: name,
            phone: phone,
            email: email,
            callTimeAm: callTimeAm,
            callTimePm: callTimePm,
            request: request,
        }
        setAllUserCards([userCard])
        formCleanUp()
    }

    const formCleanUp = () => {
        setName('')
        setPhone('')
        setEmail('')
        setRequest('')
        setCallTimeAm(false)
        setCallTimePm(false)
        setRequest('')
    }

    const handleCheckboxValue = (e) => {
        if (e.name === "callTimeAm") {
            setCallTimeAm(e.checked);
        }
        else if (e.name === "callTimePm") {
            setCallTimePm(e.checked);
        }

    }

    const mappedCard = userCards.map((card, i) => {
        return (
            <CallBackCard
                key={i}
                name={card.name}
                phone={card.phone}
                email={card.email}
                callTimeAm={card.callTimeAm}
                callTimePm={card.callTimePm}
                request={card.request}
            />
        )
    })

    return (
        <div className="contactUsCards">
            <div className="contactUsCard">
                <div className="contactUsCardTitle">
                    Contact Us
                </div>
                <div className="contactUsCardContent">
                    <h4> Call:</h4><p> 1-800-968-7662 </p>
                    <h4> Visit: </h4><p> 866 NE Dew Ponte Way Astoria, OR 97103 </p>

                    <h1>Book your FREE estimation today!</h1>
                    <form className='form' onSubmit={handleSubmit}>

                        <input
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <input
                            type='tel'
                            placeholder='Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <br/>
                        <input
                            type='email'
                            placeholder='Email@plumb.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <label>
                            Best Time to Call:
                         AM <input
                                name="callTimeAm"
                                type='checkbox'
                                checked={callTimeAm}
                                onChange={(e) => handleCheckboxValue(e.target)}
                            />
                        PM <input
                                name="callTimePm"
                                checked={callTimePm}
                                type='checkbox'
                                onChange={(e) => handleCheckboxValue(e.target)}
                            />
                        </label>
                        <br />
                        <textarea
                            type='text'
                            placeholder='What services are you looking for?'
                            value={request}
                            onChange={(e) => setRequest(e.target.value)}
                        >
                        </textarea>
                        <br />
                        <button>Book Today!</button>
                    </form>
                </div>
            </div>
            {mappedCard}
        </div>
    );
}
export default ContactUs