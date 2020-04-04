import React from 'react';
import styleClasses from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
    <ul className={styleClasses.NavigationItems}>
        <NavigationItem link="/" active>Recipes</NavigationItem>
    </ul>
);

export default NavigationItems;