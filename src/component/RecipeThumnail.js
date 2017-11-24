import React from "react";

export class RecipeThumnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.recipe,
        }
    }


    render() {
        let recipe = this.state.recipe;
        return (
            <div onClick={() => this.props.onClick(recipe)} className={'recipe-thumb shadow'}>
                <div className={'recipe-thumb-header'}>{recipe.recipe_name.replace('_', ' ')}</div>
                <div className={'recipe-thumb-body'}>
                    <img src={recipe.image.source} alt={''}/>
                    <div className={'overlay'}>
                        <span>
                            {`Cooktime: ${recipe.cook_time} minutes`} <br/>
                            {`Cuisine: ${recipe.cruisine_type.join(', ')}`} <br/>
                            {`Meal: ${recipe.meal_type.join(', ')}`}<br/>
                            {`Dietary: ${recipe.dietary.join(', ')}`}
                        </span>
                    </div>
                </div>


            </div>
        )
    }
}