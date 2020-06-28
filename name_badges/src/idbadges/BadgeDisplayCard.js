import React from 'react'
import './CardStyleing.css'

const BadgeDisplayCard = ({ index, firstName, lastName, email, tel, birth, word, blurb, badgeHeaderColor, handleDelete }) => {
    let badgeHeaderClass = badgeHeaderColor === 'navy' ? "topofbadge" : "topofbadgered";
    return (
        <div className='badgestyling '>
            <header className={badgeHeaderClass}> Badge </header>
            <p> Name: {firstName} {lastName} </p>
            <p> Email: {email}</p>
            <p> Phone Numeber: {tel} </p>
            <p> Place of birth: {birth} </p>
            <p> Favorite Word: {word} </p>
            <textarea disabled value={blurb}></textarea>
            <br />
            <button className='deletebutton' onClick={() => handleDelete(index)}>Delete User</button>
        </div>
    );
}

export default BadgeDisplayCard