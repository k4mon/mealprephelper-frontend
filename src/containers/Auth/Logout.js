import React, { Component } from 'react';
import { logoutUser } from "../../services/auth";

class Logout extends Component {
    logout = () => {
        logoutUser();
        this.props.onUserAuthChange();
        this.props.history.push("/login");
    }

    render() {
        return (
            <React.Fragment>
                    <h1>Are you sure you want to log out?</h1>
                    <button onClick={this.logout}>YES</button>
            </React.Fragment>
        );
    }
}

export default Logout;