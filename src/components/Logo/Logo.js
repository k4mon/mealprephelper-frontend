import React from 'react';
import mealPrepHelperLogo from "../../assets/images/meal-prep-helper-logo.png";
import styleClasses from "./Logo.module.css"
import {NavLink} from 'react-router-dom';

const Logo = () => (
    <div className={styleClasses.Logo}>
        <NavLink to="/" exact>
            <img alt="MealPrepHelper" src={mealPrepHelperLogo} />
        </NavLink>
    </div>
);

export default Logo;