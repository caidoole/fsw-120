import React from 'react'
import './Die'
class DiceBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            die: ''
        }
    }
    
    render() {
        return (
            <div>
                <Die />               
            </div>
        )
    }
}

export default DiceBox;