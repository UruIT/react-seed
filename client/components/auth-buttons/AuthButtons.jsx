import React from 'react';

class AuthButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            loggedState: null,
            authMessage: null
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleAuthMessage = this.handleAuthMessage.bind(this);
    }

    async handleLogin() {
        const res = await fetch('/login');
        const loggedState = await res.text();

        this.setState({
            loggedIn: true,
            loggedState,
        })

        return loggedState;
    }

    async handleLogout() {
        const res = await fetch('/logout');
        const loggedState = await res.text();

        this.setState({
            loggedIn: false,
            loggedState,
        })

        return loggedState;
    }

    async handleAuthMessage() {
        let authMessage;
        if (document.cookie.includes('expires')) {
            const res = await fetch('/auth');
            authMessage = await res.text();
        } else {
            await this.handleLogout();
            authMessage = 'Message from front end: You should log in before ask for content.'
        }
        this.setState({
            authMessage,
        })
    }

    render() {
        return (
            <div>
                {!this.state.loggedIn &&
                    <button onClick={this.handleLogin}>Login</button>
                }
                {this.state.loggedIn &&
                    <button onClick={this.handleLogout}>Logout</button>
                }
                <button onClick={this.handleAuthMessage}>Get content</button>
                <div>
                    {this.state.loggedState}
                </div>
                <div>
                    {this.state.authMessage}
                </div>
            </div>
        );
    }
}

export default AuthButtons;
