import React from 'react';
import styleClasses from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
    <ul className={styleClasses.NavigationItems}>
        <NavigationItem link="/">Recipes</NavigationItem>
        <NavigationItem link="/login" active>Login</NavigationItem>
    </ul>
);

export default NavigationItems;