import React from "react";
import styleClasses from "./RecipeItem.module.css"
import RecipeTypes from "../../RecipeTypes/RecipeTypes";

const RecipeItem = (props) => {
    return (
        <div className={styleClasses.RecipeItem} onClick={props.onRecipeClick}>
            <div className={styleClasses.RecipeName}>{props.name}</div>
            <RecipeTypes recipeTypes={props.recipe_types}/>
        </div>
    );
};

export default RecipeItem;