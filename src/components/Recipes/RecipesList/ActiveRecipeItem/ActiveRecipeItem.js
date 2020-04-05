import React from "react";
import styleClasses from "./ActiveRecipeItem.module.css"
import RecipeTypes from "../../RecipeTypes/RecipeTypes";

const ActiveRecipeItem = (props) => {
    return (
        <div className={styleClasses.RecipeItem}>
            <div className={styleClasses.RecipeName}>{props.name}</div>
            <a href={props.link}>{props.link}</a>
            <RecipeTypes recipeTypes={props.recipe_types}/>
            <button onClick={props.onEditClick}>EDIT</button>
            <button onClick={() => {props.onDeleteClick(props.recipeKey)}}>DELETE</button>
            <button onClick={props.onCloseClick}>CLOSE</button>
        </div>
    );
};

export default ActiveRecipeItem;