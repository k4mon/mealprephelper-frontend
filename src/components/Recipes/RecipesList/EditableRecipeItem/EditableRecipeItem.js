import React, { Component } from "react";
import axiosBaseInstance from '../../../../services/axios-instances';
import {getAuthHeaders} from "../../../../services/auth";
import styleClasses from "./EditableRecipeItem.module.css"
import EditableRecipeTypes from "../../RecipeTypes/EditableRecipeTypes/EditableRecipeTypes";

class EditableRecipeItem extends Component {
    state = {
        ...this.props,
        allRecipeTypes: [],
    }

    initializeRecipeTypes = () => {
        axiosBaseInstance.put("recipes/recipe_types/",
            {headers: getAuthHeaders()})
        .then((response) => {
                this.setState({allRecipeTypes: response.data})
            }
        );
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value })
    }

    handleLinkChange = event => {
        this.setState({ link: event.target.value })
    }

    flipRecipeType = recipeTypeName => {
        let recipeTypes = this.state.recipe_types;
        const idx = recipeTypes.indexOf(recipeTypeName);
        if (idx > -1) {
            recipeTypes.splice(idx, 1);
        }
        else {
            recipeTypes.push(recipeTypeName)
        }
        this.setState({ recipe_types: recipeTypes })
    }

    componentDidMount() {
        axiosBaseInstance.get("recipes/recipe_types/",
            {headers: getAuthHeaders()})
        .then(
            (response) => {
                if(response.data !== this.state.allRecipeTypes){
                    this.setState({allRecipeTypes: response.data});
                }
            }
        );
    }

    onSave = () => {
        if (this.state.recipeKey) {
            axiosBaseInstance.put("recipes/" + this.state.recipeKey,
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
            axiosBaseInstance.post("recipes/",
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
                <EditableRecipeTypes allRecipeTypes={this.state.allRecipeTypes} recipeTypes={this.state.recipe_types} flipRecipeType={this.flipRecipeType} />
                <button onClick={this.onSave}>SAVE</button>
                <button onClick={this.state.onCancelClick}>CANCEL</button>
            </div>
        )
    }

}

export default EditableRecipeItem;