import React, {Component} from "react";
import axios from "axios";
import AddRecipeButton from "../../components/Recipes/AddRecipeButton/AddRecipeButton";
import RecipesList from "../../components/Recipes/RecipesList/RecipesList";
import EditableRecipeItem from "../../components/Recipes/RecipesList/EditableRecipeItem/EditableRecipeItem";

class Recipes extends Component {
    state = {
        recipes: [],
        newRecipe: false,
        openRecipe: null,
        isEdited: false,
    }

    openActiveRecipeItem = (recipeKey) => {
        this.setState({openRecipe: recipeKey})
    }

    openNewRecipeItem = (recipeKey) => {
        this.setState({newRecipe: true})
    }

    openEditView = () => {
        this.setState({isEdited: true})
    }

    closeRecipe = () => {
        this.setState({openRecipe: null})
    }

    cancelEdit = () => {
        axios.get("http://localhost:5555/recipes/")
            .then(response => {
                this.setState({
                    isEdited: false,
                    recipes: response.data
                })
            });
    }

    removeRecipe = (recipeKey) => {
        axios.delete("http://localhost:5555/recipes/" + recipeKey)
            .then(response => {
                axios.get("http://localhost:5555/recipes/")
                    .then(response => {
                        this.setState({
                            isEdited: false,
                            openRecipe: null,
                            recipes: response.data
                        })
                    });
            });
    }

    cancelCreation = () => {
        axios.get("http://localhost:5555/recipes/")
            .then(response => {
                this.setState({
                    newRecipe: false,
                    recipes: response.data
                })
            });
    }

    componentDidMount() {
        axios.get("http://localhost:5555/recipes/")
            .then(response => {
                this.setState({recipes: response.data});
            });
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <AddRecipeButton newRecipe={this.openNewRecipeItem}/>
                {this.state.newRecipe && <EditableRecipeItem recipe_types={[]}
                                                             onCancelClick={this.cancelCreation}/>}
                <RecipesList openRecipe={this.state.openRecipe} recipes={this.state.recipes}
                             onRecipeClick={this.openActiveRecipeItem} onEditClick={this.openEditView}
                             onCloseClick={this.closeRecipe} onCancelClick={this.cancelEdit}
                             isEdited={this.state.isEdited} onDeleteClick={this.removeRecipe}/>
            </React.Fragment>
        );
    }
}

export default Recipes;