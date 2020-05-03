import React, { Component } from "react";
import axios from 'axios';
import getAuthHeaders from "../../../../services/authHeaders";
import styleClasses from "./EditableRecipeItem.module.css"
import EditableRecipeTypes from "../../RecipeTypes/EditableRecipeTypes/EditableRecipeTypes";

class EditableRecipeItem extends Component {
    state = {
        ...this.props,
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value })
    }

    handleLinkChange = event => {
        this.setState({ link: event.target.value })
    }

    flipRecipeType = recipeType => {
        let recipeTypes = this.state.recipe_types;
        const idx = recipeTypes.indexOf(recipeType);
        if (idx > -1) {
            recipeTypes.splice(idx, 1);
        }
        else {
            recipeTypes.push(recipeType)
        }
        this.setState({ recipe_types: recipeTypes })
    }

    onSave = () => {
        if (this.state.recipeKey) {
            axios.put("http://localhost:5555/recipes/" + this.state.recipeKey,
                {
                    name: this.state.name,
                    link: this.state.link,
                    recipe_types: this.state.recipe_types,
                    ingredients: [],
                }, {headers: getAuthHeaders()})
                .then(
                    this.state.onCancelClick()
                );
        }
        else {
            axios.post("http://localhost:5555/recipes/",
                {
                    name: this.state.name,
                    link: this.state.link,
                    recipe_types: this.state.recipe_types,
                    ingredients: [],
                }, {headers: getAuthHeaders()})
                .then(
                    this.state.onCancelClick()
                );
        }

    }

    render() {
        console.log(this.state)
        return (
            <div className={styleClasses.RecipeItem}>
                <input type="text"
                    className={styleClasses.RecipeName}
                    defaultValue={this.state.name}
                    onChange={this.handleNameChange} />
                <input type="text"
                    className={styleClasses.RecipeLink}
                    defaultValue={this.state.link}
                    onChange={this.handleLinkChange} />
                <EditableRecipeTypes recipeTypes={this.state.recipe_types} flipRecipeType={this.flipRecipeType} />
                <button onClick={this.onSave}>SAVE</button>
                <button onClick={this.state.onCancelClick}>CANCEL</button>
            </div>
        )
    }

}

export default EditableRecipeItem;