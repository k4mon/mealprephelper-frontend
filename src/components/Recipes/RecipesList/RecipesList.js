import React from "react";
import styleClasses from "./RecipesList.module.css"
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipesList = (props) => {
    const recipes = Object.keys(props.recipes).map(recipeKey => {
        return <RecipeItem key={recipeKey} {...props.recipes[recipeKey]}/>
    })

    return (
    <ul className={styleClasses.RecipesList}>
        {recipes}
    </ul>
    );
};

export default RecipesList;