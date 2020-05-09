import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        invalidLogin: false,
    }

    postDataHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        axios.post('http://localhost:5555/token/', data, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
            .then(response => {
                localStorage.setItem('currentUser', JSON.stringify(response));
                this.props.onUserAuthChange();
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    password: '',
                    invalidLogin: true
                })
            });
    }

    render() {
        const shouldRenderAccountCreated = this.props.location.state && this.props.location.state.fromRegister
        return (
            <React.Fragment>
                {shouldRenderAccountCreated && <div>Account created successfully</div>}
                <div>
                    <h1>Log In</h1>
                    <form encType="application/x-www-form-urlencoded" onSubmit={this.postDataHandler}>
                        <input type="text" name="username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                        <input type="password" name="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                        <input type="submit" value="Submit" />
                    </form>
                    <div><span>Don't have an account? Click </span><Link to="/register">here</Link><span> to register.</span></div>
                </div>
                {this.state.invalidLogin && <div>Invalid username or password</div>}
            </React.Fragment>
        );
    }
}

export default Login;