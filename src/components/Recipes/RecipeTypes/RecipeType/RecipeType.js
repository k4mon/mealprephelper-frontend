import React from "react";

export const STYLES = {
    "breakfast": "#bd7d1c",
    "lunch": "#1c52bd",
    "dinner": "#1cbd4a",
    "snack": "#bd1c62",
}

const RecipeType = (props) => (
    <button style={{"background": STYLES[props.recipeType]}}>{props.recipeType}</button>
)

export default RecipeType;