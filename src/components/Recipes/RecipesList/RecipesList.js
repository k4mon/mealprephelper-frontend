import React from "react";
import styleClasses from "./RecipesList.module.css"
import RecipeItem from "./RecipeItem/RecipeItem";
import ActiveRecipeItem from "./ActiveRecipeItem/ActiveRecipeItem";
import EditableRecipeItem from "./EditableRecipeItem/EditableRecipeItem";

const RecipesList = (props) => {
    const recipes = Object.keys(props.recipes).map(recipeKey => {
        if (recipeKey === props.openRecipe) {
            if (props.isEdited) {
                return <EditableRecipeItem key={recipeKey}
                                           recipeKey={props.recipes[recipeKey].id}
                                           onSaveClick={props.onSaveClick}
                                           onCancelClick={props.onCancelClick}
                                           {...props.recipes[recipeKey]}
                                           recipe_types={props.recipes[recipeKey].recipe_types.map(recipe_type => recipe_type.name)}/>
            }
            return <ActiveRecipeItem isEdited={props.isEdited}
                                     key={recipeKey}
                                     recipeKey={props.recipes[recipeKey].id}
                                     onEditClick={props.onEditClick}
                                     onCloseClick={props.onCloseClick}
                                     onDeleteClick={props.onDeleteClick}
                                     {...props.recipes[recipeKey]}/>
        } else {
            return <RecipeItem key={recipeKey}
                               onRecipeClick={() => props.onRecipeClick(recipeKey)}
                               {...props.recipes[recipeKey]}/>
        }

    })

    return (
        <ul className={styleClasses.RecipesList}>
            {recipes}
        </ul>
    );
};

export default RecipesList;