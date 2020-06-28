import React from 'react'
import './BadgeDisplayCard'
import BadgeDisplayCard from './BadgeDisplayCard'

class UserBadge extends React.Component {
    render() {
        const mappedCard = this.props.nameBadges.map((card, i) => {

            let badgeHeaderColor = i % 2 === 0 ? "crimson" : "navy";

            return (
                <BadgeDisplayCard
                    key={i}
                    index={i}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    email={card.email}
                    tel={card.tel}
                    birth={card.birth}
                    word={card.word}
                    blurb={card.blurb}
                    badgeHeaderColor={badgeHeaderColor}
                    handleDelete={this.props.handleDelete}
                />
            )
        })
        return (
            <div>
                <h1>Welcome NEW User</h1>
                {mappedCard}
            </div>
        )
    }
}
export default UserBadge