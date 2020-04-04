import React, {Component} from "react";
import axios from "axios";
import styleClasses from "./Recipes.module.css";
import AddRecipeButton from "../../components/Recipes/AddRecipeButton/AddRecipeButton";
import RecipesList from "../../components/Recipes/RecipesList/RecipesList";

class Recipes extends Component {
    state = {
        recipes: [],
    }
    componentDidMount() {
        axios.get("http://localhost:5555/recipes")
            .then(response => {
                this.setState({recipes: response.data});
            });
    }

    render() {
        return (
            <React.Fragment>
                <AddRecipeButton/>
                <RecipesList recipes={this.state.recipes}/>
            </React.Fragment>
        );
    }
}

export default Recipes;