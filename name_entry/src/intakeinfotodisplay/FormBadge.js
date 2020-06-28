import React from 'react'
import InfoDisplayCard from './InfoDisplayCard'

class FormBadge extends React.Component {
    render() {
        const mappedCard = this.props.nameBadges.map((card, i) => {
            return (
                <InfoDisplayCard
                    key={i}
                    index={i}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    age={card.age}
                    handleDelete={this.props.handleDelete}
                />
            )
        })
        return (

            <div>
                {mappedCard}
            </div>
        )
    }
}
export default FormBadge