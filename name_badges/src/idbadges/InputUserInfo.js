import React from 'react'
import UserBadge from './UserBadge'

class InputUserInfo extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            birth: '',
            word: '',
            blurb: '',
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
            email: this.state.email,
            tel: this.state.tel,
            birth: this.state.birth,
            word: this.state.word,
            blurb: this.state.blurb,
        }

        this.setState({
            nameBadges: [...this.state.nameBadges, newUserData],
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            birth: '',
            word: '',
            blurb: '',
        })
    }
    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({ nameBadges: updatedBadgeArray })
    }

    render() {
        return (
            <div>
                <h1>Input NEW User Information Here</h1>
                <form className='formattributes' onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        minLength='3'
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        minLength='3'
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        placeholder="Email"
                        minLength='3'
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="tel"
                        pattern="[0-9]{10}"
                        value={this.state.tel}
                        name="tel"
                        placeholder="Phone"
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="text"
                        value={this.state.birth}
                        name="birth"
                        placeholder="Place of Birth"
                        minLength='3'
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="text"
                        value={this.state.word}
                        name="word"
                        placeholder="Favorite word?"
                        minLength='3'
                        onChange={this.handleChange}
                        required
                    />

                    <textarea
                        type="text"
                        value={this.state.blurb}
                        name="blurb"
                        placeholder="Tell us something about yourself"
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <button className='subbutton'>Submit</button>
                </form>
                <UserBadge
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default InputUserInfo