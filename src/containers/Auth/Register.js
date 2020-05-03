import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    state = {
        username: '',
        password: '',
        alreadyExists: false,
    }

    postDataHandler = () => {
        const data = {
            username: this.state.username,
            password: this.state.password,
        };

        axios.post('http://localhost:5555/users/', data)
            .then(response => {
                this.props.history.push("/login", {fromRegister: true})
            })
            .catch(error => {
                this.setState({
                    username: '',
                    password: '',
                    alreadyExists: true,
                })
            });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Register</h1>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                    <button onClick={this.postDataHandler}>Register</button>
                </div>
                {this.state.alreadyExists && <div>Provided username already exists in the system</div>}
            </div>
        );
    }
}

export default Register;