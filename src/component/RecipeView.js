/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import {FlatList} from "./FlatList";

export class RecipeView extends React.Component {

    _renderIngredients = (item) => {
        let note = item.note !== undefined ? item.note : '';
        note = note ? `(${note})` : '';
        return <p>{`${item.quantity} ${item.metric} of ${item.name} ${note}`}</p>;
    };

    _renderInstruction = (item) => {

        return <p>{item}</p>;
    };

    render() {
        let {cook_time, image, cruisine_type, meal_type, dietary, ingredients, instruction} = this.props.recipe;
        return (
            <div className={'recipe-view'}>
                <h1>{this.props.recipe.recipe_name.replace('_', ' ')}</h1>
                <div className={'display-flex'}>
                    <img src={image.source} alt={''}/>
                    {`Cooktime: ${cook_time} minutes`} <br/>
                    {`Cuisine: ${cruisine_type.join(', ')}`} <br/>
                    {`Meal: ${meal_type.join(', ')}`}<br/>
                    {`Dietary: ${dietary.join(', ')}`}
                </div>
                <h2>Ingredients</h2>
                <FlatList data={ingredients}
                          renderItem={this._renderIngredients}/>
                <h2>Instruction</h2>
                <FlatList data={instruction}
                          renderItem={this._renderInstruction}/>
            </div>
        )
    }
}