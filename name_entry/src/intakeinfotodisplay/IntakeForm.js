import React from 'react'
import FormBadge from './FormBadge'


class IntakeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            nameBadges: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        }
        this.setState({
            nameBadges: [newUserData, ...this.state.nameBadges],
            firstName: '',
            lastName: '',
            age: ''
        })
    }
    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({ nameBadges: updatedBadgeArray })
    }

    render() {
        return (
            <div className="content-container">
                <h1>Greetings Mortal</h1>
                <form className='form-mating' onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange} />

                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange} />

                    <input
                        type="number"
                        value={this.state.age}
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChange} />
                    <br />
                    <button className='sub-button'> Sub Press Here </button>
                </form>
                <FormBadge
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default IntakeForm