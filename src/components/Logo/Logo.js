import React from 'react';
import mealPrepHelperLogo from "../../assets/images/meal-prep-helper-logo.png";
import styleClasses from "./Logo.module.css"

const Logo = () => (
    <div className={styleClasses.Logo}>
        <img alt="MealPrepHelper" src={mealPrepHelperLogo} />
    </div>
);

export default Logo;