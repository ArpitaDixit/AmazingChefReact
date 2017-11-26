import React from "react";
import {StyledBox} from "./component/CommonBox";
import IngredientForm from "./component/IngredientForm";
import {FlatList} from "./component/FlatList";
import {Button} from "./component/Button";
import MdAddCircle from "react-icons/lib/md/add-circle";


export class ContactUsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                ingredients: [],
                instruction: [],
            }
        }
    }

    _onNameChange = (text, index) => {
        let recipe = this.state.recipe;
        let ingredients = recipe.ingredients;
        let ingr = ingredients[index];
        ingr.name = text;
        ingredients[index] = ingr;
        recipe.ingredients=ingredients;
        this.setState({recipe: recipe});
    };

    _renderIngredientFormCell = (item, index) => {
        return <IngredientForm
            onNameChange={this._onNameChange}
            index={index}
            ingredient={item}
            onRemove={this._remIngr}/>
    };

    _addIngr = () => {
        let recipe = this.state.recipe;
        let ingredients = recipe.ingredients;
        let ingr = {};
        ingredients.push(ingr);
        recipe.ingredients = ingredients;
        this.setState({recipe: recipe});
        console.log(this.state);

    };

    _remIngr = (index) => {
        console.log(index);
        let recipe = this.state.recipe;
        let ingredients = recipe.ingredients;
        ingredients.splice(index, 1);
        recipe.ingredients = ingredients;
        this.setState({recipe: recipe});
        console.log(this.state);

    };

    render() {
        return (
            <StyledBox>
                <div className={'ingredient-form'}>
                    <h1>Ingredients</h1>
                    <FlatList
                        data={this.state.recipe.ingredients}
                        renderItem={this._renderIngredientFormCell}/>
                    <MdAddCircle
                        onClick={this._addIngr}
                        size={22}
                        style={{color: '#FACF8E'}}/>
                </div>
            </StyledBox>
        )
    }
}