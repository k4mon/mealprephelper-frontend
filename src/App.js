import React from 'react';
import Layout from "./containers/Layout/Layout";
import Recipes from "./containers/Recipes/Recipes";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Route path="/" exact component={Recipes}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
