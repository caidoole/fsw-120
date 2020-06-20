import React from 'react'
import './HCstyle.css'

class HeroCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            name: this.props.name,
            show: this.props.show,
            catchPhrase: this.props.catchPhrase,
            imageName: this.props.imageName
        }
    }

    render() {
        return (
            <div className='hero-item' onClick={() => this.props.handleOnClick(this.state.catchPhrase)}>
                <h3>Hero Name:</h3> <p>{this.state.name}</p>
                <h3>Show:</h3> <p>{this.state.show}</p>
                <h3>Catch Phrase:</h3> <p>{this.state.catchPhrase}</p>
                <h3>Photo-Op:</h3>
                 <img className='images' alt={this.state.name} src={this.state.imageName}/>
                        
            </div>
            
        )
    }
}

export default HeroCard;