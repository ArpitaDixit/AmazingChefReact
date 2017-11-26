/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {FlatList} from "./FlatList";

export class RecipeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.recipe,
        }
    }

    _renderIngredients = (item) => {
        let note = item.note !== undefined ? item.note : '';
        note = note ? `(${note})` : '';
        return <p>{`${item.quantity} ${item.metric} of ${item.name} ${note}`}</p>;
    };

    _renderInstruction = (item) => {

        return <p>{item}</p>;
    };

    render() {
        const recipe = this.state.recipe;

        return (
                <div className={'recipe-view'}>
                    <h1>{this.props.recipe.recipe_name.replace('_', ' ')}</h1>
                    <div className={'display-flex'}>
                        <img src={this.state.recipe.image.source} alt={''}/>
                        {`Cooktime: ${this.state.recipe.cook_time} minutes`} <br/>
                        {`Cuisine: ${this.state.recipe.cruisine_type.join(', ')}`} <br/>
                        {`Meal: ${this.state.recipe.meal_type.join(', ')}`}<br/>
                        {`Dietary: ${this.state.recipe.dietary.join(', ')}`}
                    </div>
                    <h2>Ingredients</h2>
                    <FlatList data={recipe.ingredients}
                              renderItem={this._renderIngredients}/>
                    <h2>Instruction</h2>
                    <FlatList data={recipe.instruction}
                              renderItem={this._renderInstruction}/>
                </div>
        )
    }
}