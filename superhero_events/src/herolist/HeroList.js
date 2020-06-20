import React from 'react'
import HeroCard from './HeroCard'
import data from './SuperHeroes.json'

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    handleOnClick(catchPhrase) {
        alert(catchPhrase);
    }

    render() {
        const heroList = data.map((hero => {
            return (
                <HeroCard
                    key={hero.id}
                    name={hero.name}
                    show={hero.show}
                    catchPhrase={hero.catchPhrase}
                    imageName={hero.imageName}
                    handleOnClick={this.handleOnClick}
                />
            )
        }))

        return (
            <div>
                <h2> 'Heros' of Yesteryear</h2>
                {heroList}
            </div>
        )
    }
}
export default HeroList;