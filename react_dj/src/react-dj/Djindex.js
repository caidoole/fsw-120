import React from 'react'
import DjButtons from './DjButtons'

class Djindex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      djButtons: [
        { id: 1, color: "white" },
        { id: 2, color: "white" },
        { id: 3, color: "white" },
        { id: 4, color: "white" }
      ]
    }
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    let newButtons = [...this.state.djButtons];
    for (let i = 0; i < newButtons.length; i++) {
      newButtons[i].color = "black";
    }
    this.setState({
      djButtons: newButtons
    })
  };

  render() {
    const djButtonDisplay = this.state.djButtons.map((button) => {
      return (
        <DjButtons key={button.id} color={button.color} />
      )
    })

    return (
      <div>
        <div className='button-container'>
          {djButtonDisplay}
        </div>
        <button onClick={this.clickButton}>4 Change</button>
      </div>
    )
  }
}
export default Djindex;