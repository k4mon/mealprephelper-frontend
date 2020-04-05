import React from 'react';
import styleClasses from "./AddRecipeButton.module.css";

const AddRecipeButton = (props) => (
    <button className={styleClasses.Button} onClick={props.newRecipe}>ADD RECIPE</button>
);

export default AddRecipeButton;