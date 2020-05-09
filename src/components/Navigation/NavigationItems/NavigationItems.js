import React from 'react';
import styleClasses from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
    <ul className={styleClasses.NavigationItems}>
        {props.isAuthenticated ? <NavigationItem link="/">Recipes</NavigationItem> : null}
        {props.isAuthenticated ? <NavigationItem link="/logout" active>Logout</NavigationItem> : <NavigationItem link="/login" active>Login</NavigationItem>}
    </ul>
);

export default NavigationItems;