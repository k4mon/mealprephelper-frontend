import React from "react";
import RecipeType from "../RecipeType/RecipeType";

const EditableRecipeTypes = (props) => {
    console.log(props.allRecipeTypes)
    const editableRecipeTypes = props.allRecipeTypes.map(recipeType => {
        const color = props.recipeTypes.indexOf(recipeType.name) > -1 ? recipeType.color : "#aaaaaa"
        return <RecipeType key={recipeType.id} recipeType={recipeType.name} onClick={() => {
            props.flipRecipeType(recipeType.name)
        }} color={color}/>
    })

    return (<div>
        {editableRecipeTypes}
    </div>);

}

export default EditableRecipeTypes;