import React from "react";
import styleClasses from "./RecipeItem.module.css"
import RecipeTypes from "../../RecipeTypes/RecipeTypes";

const RecipeItem = (props) => {


    return (
        <div className={styleClasses.RecipeItem}>
            <div className={styleClasses.RecipeName}>{props.name}</div>
            <a href={props.link} className={styleClasses.RecipeLink}>{props.link}</a>
            <RecipeTypes recipeTypes={props.recipe_types}/>
        </div>
    );
};

export default RecipeItem;