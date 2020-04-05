import React from "react";

const RecipeType = (props) => (
    <button style={{"background": props.color}} onClick={props.onClick}>{props.recipeType}</button>
)

export default RecipeType;