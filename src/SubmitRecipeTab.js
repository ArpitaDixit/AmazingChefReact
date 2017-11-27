/**
 * Created by khoale on 11/26/2017
 */
import React from "react";
import {StyledBox} from "./component/CommonBox";
import {FlatList} from "./component/FlatList";
import MdAddCircle from "react-icons/lib/md/add-circle";
import {Button} from "./component/Button";
import {RecipeViewModal} from "./RecipeViewModal";
import {sendRequest} from "./service/BaseServices";
import {BaseInfoForm, IngredientFormCell, InstructionFormCell} from "./component/RecipeForm";


export class SubmitRecipeTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                recipe_name: '',
                image: {source: ''},
                cruisine_type: [],
                cook_time: 0,
                dietary: [],
                meal_type: [],
                ingredients: [],
                instruction: [],
            },
            showPreview: false,
        }
    }

    _newRecipeForm() {
        return {
            recipe_name: '',
            image: {source: ''},
            cruisine_type: [],
            cook_time: 0,
            dietary: [],
            meal_type: [],
            ingredients: [],
            instruction: [],
        }
    }

    _onIngredientChange(ingr, index) {
        let recipe = this.state.recipe;
        let ingredients = recipe.ingredients;
        ingredients[index] = ingr;
        recipe.ingredients = ingredients;
        this.setState({recipe: recipe});
        console.log(this.state.recipe);
    }


    _renderIngredientFormCell = (item, index) => {
        return <IngredientFormCell
            onChange={this._onIngredientChange.bind(this)}
            index={index}
            ingredient={item}
            onRemove={this._remIngr}/>
    };

    _onInstructionChange(text, index) {
        let recipe = this.state.recipe;
        let instruction = recipe.instruction;
        instruction[index] = text;
        recipe.instruction = instruction;
        this.setState({recipe: recipe});
        console.log(this.state.recipe.instruction);
    }

    _renderInstructionFormCell = (item, index) => {
        return <InstructionFormCell
            onChange={this._onInstructionChange.bind(this)}
            index={index}
            instruction={item}
            onRemove={this._remInst}/>
    };

    _addIngr = () => {
        let recipe = this.state.recipe;
        let ingredients = recipe.ingredients;
        let ingr = {name: '', quantity: 0, metric: 'lb', note: ''};
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

    _addInst = () => {
        let recipe = this.state.recipe;
        let instruction = recipe.instruction;
        let inst = '';
        instruction.push(inst);
        recipe.instruction = instruction;
        this.setState({recipe: recipe});

    };

    _remInst = (index) => {
        let recipe = this.state.recipe;
        let instruction = recipe.instruction;
        instruction.splice(index, 1);
        recipe.instruction = instruction;
        this.setState({recipe: recipe});
    };

    _onBaseInfoChange({recipe_name, image, cruisine_type, meal_type, dietary, cook_time}) {
        let recipe = this.state.recipe;
        recipe.recipe_name = recipe_name;
        recipe.image = image;
        recipe.cruisine_type = cruisine_type;
        recipe.meal_type = meal_type;
        recipe.dietary = dietary;
        recipe.cook_time = cook_time;
        this.setState({recipe: recipe});
        console.log(recipe);
    }

    _submitRecipe() {
        let url = '/recipes';
        sendRequest('POST', url, this.state.recipe, null, this, 'submit recipe');
    }

    onSuccess(res, tag) {
        if (tag === 'submit recipe') {
            console.log(res);
            this.setState({recipe: this._newRecipeForm()},
                () => console.log(this.state.recipe));
        }
    }

    render() {
        let {recipe_name, image, cook_time, dietary, cruisine_type, meal_type} = this.state.recipe;
        return (
            <StyledBox>
                <RecipeViewModal isOpen={this.state.showPreview}
                                 onRequestClose={() => this.setState({showPreview: false})}
                                 recipe={this.state.recipe}/>
                <Button onClick={() => this.setState({showPreview: true})}>PREVIEW</Button>
                <div className={'recipe-form'}>
                    <h1> Recipe Form </h1>
                    <BaseInfoForm
                        onChange={this._onBaseInfoChange.bind(this)}
                        baseInfo={{
                            recipe_name: recipe_name,
                            image: image, cook_time: cook_time, dietary: dietary, cruisine_type: cruisine_type,
                            meal_type: meal_type
                        }}/>
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
                    <div className={'instruction-form'}>
                        <h1>Instructions</h1>
                        <FlatList
                            data={this.state.recipe.instruction}
                            renderItem={this._renderInstructionFormCell}/>
                        <MdAddCircle
                            onClick={this._addInst}
                            size={22}
                            style={{color: '#FACF8E'}}/>
                    </div>
                    {/*<SortableInstructionForm instruction={this.state.recipe.instruction}/>*/}
                </div>
                <Button onClick={() => this._submitRecipe()}>SUBMIT</Button>
            </StyledBox>
        )
    }
}