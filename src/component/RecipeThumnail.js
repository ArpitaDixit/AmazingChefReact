import React from "react";
import {RecipeViewModal} from "../RecipeViewModal";

export class RecipeThumnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.recipe,
        }
    }


    render() {
        return (
            <div onClick={() => this.props.onClick(this.state.recipe)} className={'recipe-thumb'}>
                <div className={'recipe-thumb-header'}>{this.state.recipe.recipe_name}</div>
                <div className={'recipe-thumb-body'}>
                    <img src={this.state.recipe.image.source} alt={''}/>
                    <div className={'overlay'}>
                        <div className={'overlay-text'}>
                            {`Cooktime: ${this.state.recipe.cook_time} minutes`} <br/>
                            {`Cuisine: ${this.state.recipe.cruisine_type.join(', ')}`} <br/>
                            {`Meal: ${this.state.recipe.meal_type.join(', ')}`}<br/>
                            {`Dietary: ${this.state.recipe.dietary.join(', ')}`}
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}