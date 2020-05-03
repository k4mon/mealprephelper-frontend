import React from 'react';
import styleClasses from "./NavigationItem.module.css";
import {NavLink} from 'react-router-dom';

const NavigationItem = (props) => (
    <div className={styleClasses.NavigationItem}>
        <li>
            <NavLink to={props.link} exact activeClassName={styleClasses.ActiveNavigationItem}>
                {props.children}
            </NavLink>
        </li>
    </div>
);

export default NavigationItem;