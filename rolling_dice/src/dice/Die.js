import React from 'react';
import './dice-style.css';

class Die extends React.Component {

    render() {
        let buttonClass = this.props.isSelected ? "dieSelected" : "die";

        return (
            <div className={buttonClass} onClick={this.props.click}>
                <div className='dieText'>
                    {this.props.dieValue}
                </div>
            </div>
        )
    }
}

export default Die;