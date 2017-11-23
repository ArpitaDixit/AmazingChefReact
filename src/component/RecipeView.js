import React from "react";
import {StyledBox} from "./CommonBox";

export class RecipeView extends React.Component {

    constructor(props){
        super(props);
        this.state={
            recipe: this.props.recipe,
        }
    }

    render() {
        return (
            <div>
                {this.props.recipe.recipe_name}
            </div>
        )
    }
}