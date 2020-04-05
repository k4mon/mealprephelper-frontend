import React from "react";
import {STYLES} from "../RecipeTypes";
import RecipeType from "../RecipeType/RecipeType";

const EditableRecipeTypes = (props) => {
    const editableRecipeTypes = Object.keys(STYLES).map(recipeType => {
        const color = props.recipeTypes.indexOf(recipeType) > -1 ? STYLES[recipeType] : "#aaaaaa"
        return <RecipeType key={recipeType} recipeType={recipeType} onClick={() => {
            props.flipRecipeType(recipeType)
        }} color={color}/>
    })

    return (<div>
        {editableRecipeTypes}
    </div>);

}

export default EditableRecipeTypes;