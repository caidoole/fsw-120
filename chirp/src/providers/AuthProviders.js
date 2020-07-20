import React, { Component } from 'react'

const AuthContext = React.createContext()

class AuthProviders extends Component {
    constructor() {
        super()
        this.state = {
            userToken: null,
            user: null
        }
    }
    handleAuthLogin = (userName) => {
        var userLoginInfo = {
            isLoggedIn: true,
            user: userName
        }
        localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo))
    }

    getToken = () => {
        let token = localStorage.getItem('userLoginInfo')
        if (token !== null) {
            let parsedToken = JSON.parse(token);
            this.setState({
                userToken: parsedToken.isLoggedIn,
                user: parsedToken.user
            })
        }
    }

    handleUserLogout = () => {
        localStorage.removeItem('userLoginInfo')
        this.setState({
            userToken: null,
            user: null,
        })
    }
    render() {
        return (
            <AuthContext.Provider
                value={{
                    ...this.state,
                    handleAuthLogin: this.handleAuthLogin,
                    getToken: this.getToken,
                    handleUserLogout: this.handleUserLogout
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthProviders

export const withAuth = C => props => (
    <AuthContext.Consumer>
        {value => <C{...props}{...value} />}
    </AuthContext.Consumer>
)
