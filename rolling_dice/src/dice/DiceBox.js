import React from 'react';
import Die from './Die';
import './dicebox-style.css';

class DiceBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1Value: 0,
            num1Selected: false,
            num2Value: 0,
            num2Selected: false,
            num3Value: 0,
            num3Selected: false,
            num4Value: 0,
            num4Selected: false,
            num5Value: 0,
            num5Selected: false,
            numRolls: 0
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {

        if (this.state.numRolls === 3) {
            this.setState({
                num1Value: 0,
                num1Selected: false,
                num2Value: 0,
                num2Selected: false,
                num3Value: 0,
                num3Selected: false,
                num4Value: 0,
                num4Selected: false,
                num5Value: 0,
                num5Selected: false,
                numRolls: 0
            })

        } else {
            this.setState({
                num1Value: this.state.num1Selected === true ? this.state.num1Value : Math.floor(Math.random() * 6) + 1,
                num2Value: this.state.num2Selected === true ? this.state.num2Value : Math.floor(Math.random() * 6) + 1,
                num3Value: this.state.num3Selected === true ? this.state.num3Value : Math.floor(Math.random() * 6) + 1,
                num4Value: this.state.num4Selected === true ? this.state.num4Value : Math.floor(Math.random() * 6) + 1,
                num5Value: this.state.num5Selected === true ? this.state.num5Value : Math.floor(Math.random() * 6) + 1,
                numRolls: this.state.numRolls + 1
            })
        }
    }

    selectDie(selectedDie) {
        switch (selectedDie) {
            case 1:
                this.setState({ num1Selected: true })
                break;
            case 2:
                this.setState({ num2Selected: true })
                break;
            case 3:
                this.setState({ num3Selected: true })
                break;
            case 4:
                this.setState({ num4Selected: true })
                break;
            case 5:
                this.setState({ num5Selected: true })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='dicebox'>
                    <Die
                        dieValue={this.state.num1Value}
                        isSelected={this.state.num1Selected}
                        click={() => this.selectDie(1)}
                    />
                    <Die
                        dieValue={this.state.num2Value}
                        isSelected={this.state.num2Selected}
                        click={() => this.selectDie(2)}
                    />
                    <Die
                        dieValue={this.state.num3Value}
                        isSelected={this.state.num3Selected}
                        click={() => this.selectDie(3)}
                    />
                    <Die
                        dieValue={this.state.num4Value}
                        isSelected={this.state.num4Selected}
                        click={() => this.selectDie(4)} />
                    <Die
                        dieValue={this.state.num5Value}
                        isSelected={this.state.num5Selected}
                        click={() => this.selectDie(5)} />
                </div>
                <div>
                    <button className='rollButton' onClick={this.rollDice}>Roll Dice</button>
                </div>
            </div>
        )
    }
}

export default DiceBox;