import React from "react";
import {FlatList} from "./FlatList";

export class RecipeView extends React.Component {

    constructor(props){
        super(props);
        this.state={
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
                <div className={'recipe-view-name'}>
                {this.props.recipe.recipe_name}
                </div>
                <div className={'display-flex'}>
                    <img src={this.state.recipe.image.source} alt={''}/>
                    {`Cooktime: ${this.state.recipe.cook_time} minutes`} <br/>
                    {`Cuisine: ${this.state.recipe.cruisine_type.join(', ')}`} <br/>
                    {`Meal: ${this.state.recipe.meal_type.join(', ')}`}<br/>
                    {`Dietary: ${this.state.recipe.dietary.join(', ')}`}
                </div>
                <div>
                    <h1>Ingredients</h1>
                    <FlatList
                    data={recipe.ingredients}
                    renderItem={this._renderIngredients}/>
                </div>
                <div>
                    <h1>Instruction</h1>
                    <FlatList
                    data={recipe.instruction}
                    renderItem={this._renderInstruction}/>
                </div>


            </div>
        )
    }
}