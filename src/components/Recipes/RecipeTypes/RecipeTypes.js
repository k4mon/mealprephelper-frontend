import React from "react";
import RecipeType from "./RecipeType/RecipeType";
import styleClasses from "./RecipeTypes.module.css";

const RecipeTypes = (props) => {
    const recipeTypes = props.recipeTypes.map(recipeType => {
        return <RecipeType key={recipeType} recipeType={recipeType}/>
    })

    return (
        <div className={styleClasses.RecipeTypes} >
            {recipeTypes}
        </div>

    );
};

export default RecipeTypes;