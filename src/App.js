import React, {Component} from 'react';
import Layout from "./containers/Layout/Layout";
import Recipes from "./containers/Recipes/Recipes";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./containers/Auth/Login";
import Logout from "./containers/Auth/Logout";
import Register from "./containers/Auth/Register";
import { isUserAuthenticated } from './services/auth';


class App extends Component {
  state = {
    isUserAuth: isUserAuthenticated(),
  }

  userChangedAuthenticationState = () => {
    const newAuthenticationState = isUserAuthenticated();
    if (newAuthenticationState !== this.state.isUserAuth){
      this.setState({isUserAuth: newAuthenticationState});
    }
  }

  render() {
    return (<BrowserRouter>
        <Layout isAuthenticated={this.state.isUserAuth}>
            {this.state.isUserAuth ? <Route path="/" exact component={Recipes}/> : null}
            <Route
                path="/login"
                exact
                render={(props) => <Login {...props} onUserAuthChange={this.userChangedAuthenticationState} />}
            />
            <Route
                path="/logout"
                exact
                render={(props) => <Logout {...props} onUserAuthChange={this.userChangedAuthenticationState} />}
            />
            <Route path="/register" exact component={Register}/>
        </Layout>
    </BrowserRouter>
  );
  }
}

export default App;
